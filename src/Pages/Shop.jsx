import Productlist from "../components/ProductList";
import { useProducts } from "../context/ProductContext";
//a page showing products
export default function Shop(){
const{products}=useProducts()
    return(
        <div className="shop">
        <Productlist/>
        </div>
    )
}