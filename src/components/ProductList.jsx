import { useState } from "react"
import { useProducts} from "../context/ProductContext"
import ProductCard from "./ProductCard"

export default function ProductList(){
const{products,setProducts}=useProducts()

const [search,setSearch]=useState("")

//searching products that exactly match the name of the product
function handleSearch(event){
    // event.preventDefault()
    const value = event.target.value
    setSearch(value)
    fetch(value?`http://localhost:3001/products?name=${value}`
        :"http://localhost:3001/products"//displaying products after a successful search
    )
    .then((res)=>res.json())
    .then((data)=>setProducts(data))

}
    return(
        <>
        <form className="search-form mt-4 ">
                <label htmlFor="search">
            <input type="text" placeholder="🔍search..." className="search-input"
            style={{width:"300px",borderRadius:"50px",backgroundColor:"azure",color:"black",padding:"8px"}} 
            value={search}
            onChange={handleSearch}
            />
                </label>
            </form>
        <div className="row">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
            
        </div>
        </>
    )
}