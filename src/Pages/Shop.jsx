import Productlist from "../components/ProductList";
import { useProducts } from "../context/ProductContext";

export default function Shop(){
const{products}=useProducts()
    return(
        <div className="shop">
        <Productlist/>
        </div>
    )
}