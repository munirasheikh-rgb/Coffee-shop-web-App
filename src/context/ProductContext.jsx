import { createContext, useContext, useEffect, useState } from "react";

const ProductContext= createContext()

export function ProductProvider({children}){
    const [products,setProducts]=useState([])

    useEffect(()=>{//fetching products from json-server when the app loads
fetch("http://localhost:3001/products")
.then((res)=>res.json())
.then((data)=>setProducts(data))
    },[])
    
    return(//passing products and setproducts to all components
      <ProductContext.Provider value={{products,setProducts}}>
        {children}
      </ProductContext.Provider>
    )
}
 export function useProducts(){ //implementing custom hook for easy access to productcontext 
    return useContext(ProductContext)
 }