import {  useState } from "react"
import { useProducts } from "../context/ProductContext"
import { useNavigate } from "react-router-dom"

export default function ProductForm(){
const [formData,setFormData]= useState({
name:"",
description:"",
origin:"",
price:""
})
const{products,setProducts}=useProducts()

const navigate=useNavigate()

function handleonchage(event){
    setFormData({
        ...formData,
        [event.target.name]:event.target.value
    })

}

function handleSubmit(event){
    event.preventDefault()
fetch("http://localhost:3001/products",{
    method:"POST",
    headers:{
        Accept:"application/json",
        "content-type":"application/json"
    },body:JSON.stringify({...formData})
}).then((res)=>res.json())
   .then((newProduct)=>{setProducts((prevProduct)=>[...prevProduct, newProduct])
    navigate("/shop")})
   .catch((error)=>{console.log(error)})
}

   


    return(
        <div>
            <form onSubmit={handleSubmit} className="form-add">
                <h4 style={{fontFamily:"ui-serif"}}>Coffee Name</h4>
        <input type="text" 
        name="name" placeholder="Name" 
        onChange={handleonchage} 
        value={formData.name}
        className="frm-input"
        required>
        </input>
             <h4 style={{fontFamily:"ui-rounded"}}>Description</h4>
        <input type="text" 
        name="description" placeholder="Descripion" 
        onChange={handleonchage}
        value={formData.description}
        className="frm-input"
         required>
        </input>
             <h4 style={{fontFamily:"fangsong"}}>Origin</h4>
        <input type="text" 
        name="origin" placeholder="Origin" 
        onChange={handleonchage} 
        value={formData.origin}
        className="frm-input"
        required>
        </input>
             <h4 style={{fontFamily:"fangsong"}}>Price</h4>
        <input type="text" 
        name="price" placeholder="Price" 
        onChange={handleonchage} 
        value={formData.price}
        className="frm-input"
        required>
        </input>
        <div>
         <button className="btn mt-5" type ="submit">Add</button>
        </div>
            </form>
           
        </div>
    )
}