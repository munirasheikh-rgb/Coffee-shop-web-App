export default function ProductCard({product}){

    return(
        <div className="card m-4 p-3">
    <h4>{product.name}</h4>
    <p>{product.description}</p>
    <p>{product.origin}</p>
    <h5>${product.price}</h5>

        </div>
    )
}