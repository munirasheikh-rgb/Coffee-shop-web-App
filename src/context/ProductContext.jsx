import { createContext, useContext, useEffect, useState } from "react";

const ProductContext= createContext()

export function ProductProvider({children}){
    const [products,setProducts]=useState([])

    useEffect(()=>{
fetch("http://localhost:3001/products")
.then((res)=>res.json())
.then((data)=>setProducts(data))
    },[])
    
    return(
      <ProductContext.Provider value={{products,setProducts}}>
        {children}
      </ProductContext.Provider>
    )
}
 export function useProducts(){
    return useContext(ProductContext)
 }