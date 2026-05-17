import { render,screen } from "@testing-library/react";
import AdminPortal from "../Pages/AdminPortal";
import { BrowserRouter } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { vi } from "vitest";

test("renders admin portal with the product form",()=>{
    render(
        <BrowserRouter>
        <ProductContext.Provider value ={{products:[],setProducts:vi.fn()}}>
         <AdminPortal/>
        </ProductContext.Provider>
        </BrowserRouter>
    )
    expect(screen.getByText(/admin portal/i)).toBeInTheDocument()
    expect(screen.getByRole("button",{name:/add/i})).toBeInTheDocument()
})