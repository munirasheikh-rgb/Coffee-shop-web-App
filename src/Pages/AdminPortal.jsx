import ProductForm from "../components/ProductForm";

export default function AdminPortal(){

    return (
        <div className="content-portal">
            <h2 style={{color:"black",marginTop:"25px",
            fontWeight:"bold",padding:"10px"}}>Admin Portal</h2>
            <ProductForm/>
        </div>
    )
}