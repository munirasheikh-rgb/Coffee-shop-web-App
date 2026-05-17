import { useProducts } from "../context/ProductContext"
import { useState } from "react"
export default function ProductCard({product}){
const {setProducts}= useProducts() //access products from context (Useproducts)
const[newPrice , setNewPrice]= useState(product.price)

//updating the selected price
function handleUpdatedPrice(id){
    fetch(`http://localhost:3001/products/${product.id}`,{
      method:"PATCH", //send PATCH request to update the price
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({price:newPrice})
    }).then((res)=>res.json())
    .then((updatedProduct)=>{
setProducts((prevProduct)=>//updatee state after a successful edit
prevProduct.map((item)=>item.id===updatedProduct.id?updatedProduct:item))
    })

}
//removing selected produt from the UI and database
function handleDelete(){
    fetch(`http://localhost:3001/products/${product.id}`,{
    method:"DELETE",
    }).then(()=>{setProducts((prevProduct)=>//removing deleted product from state
        prevProduct.filter((item)=>item.id !== product.id))})
}

    return(
        <div className="card m-4 p-3">
    <h4>{product.name}</h4>
    <p>{product.description}</p>
    <p>{product.origin}</p>
    <h5>${product.price}</h5>
   <input  type="number" value={newPrice}
   onChange={(event)=>setNewPrice(event.target.value)}
   className="frm-input  w-50 mt-3"/>
   <button style={{alignSelf:"end"}} className="btn m-2" onClick={handleUpdatedPrice}>Edit price</button>
   <button  style={{alignSelf:"end"}} className ="btn m-2 text-danger"onClick={handleDelete}>Remove</button>
        </div>
    )
}