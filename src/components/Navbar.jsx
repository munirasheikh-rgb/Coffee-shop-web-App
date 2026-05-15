import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        
        <nav className="justify-content-between d-flex  p-3 navbar">
            <h5 style={{color:"brown",marginleft:"8px"}}><em>coffee.you</em>
            </h5>
            <div className="navlink">
            <NavLink  className="m-3 text-dark" to="/login">Login</NavLink>
            <NavLink   className="m-3 text-dark" to="/">Home</NavLink>
            <NavLink  className="m-3 text-dark"  to="/shop">Shop</NavLink>
            <NavLink  className="m-3 text-dark" to="/adminportal">Admin Portal</NavLink>
            <NavLink   className="m-3 text-dark" to="/contacts">Contacts</NavLink>
            </div>
        </nav>
        
    )
}