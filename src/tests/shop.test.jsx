import { render,screen,fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/ProductContext";

const products=[
    {
        id: "1",
      name: "Arabica roast",
      description: "smooth coffee with rich flavor",
      origin: "Kenya",
      price: 12
    }
]

function rendershop(){
    const setProducts=vi.fn()
    render(
        <ProductContext.Provider value={{products,setProducts}}>
        <ProductList/>
        </ProductContext.Provider>
    )
    return(setProducts)
}

test("renders product list",()=>{
    rendershop()
    expect(screen.getByText(/arabica roast/i)).toBeInTheDocument()
})

test("search input excepts product search",()=>{
    rendershop()
    const searchInput= screen.getByPlaceholderText(/search/i)
    fireEvent.change(searchInput,{target:{value:"Arabica roast"}})
    expect(searchInput).toHaveValue("Arabica roast")
})
test("edit price button renders",()=>{
    rendershop()
    expect(screen.getByRole("button",{name:/edit price/i})).toBeInTheDocument()
})
test("delete button renders",()=>{
    rendershop()
    expect(screen.getByRole("button",{name:/remove/i})).toBeInTheDocument()
})