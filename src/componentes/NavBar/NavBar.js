import CartWidget from "../CartWidget/CartWidget";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <section className="hero is-primary">
            <nav className="hero body position-relative">
                <link to="./">
                    <h3>E-commerce</h3>
                </link>
                <div className="Categorias">
                    <NavLink to={`/category/Productos`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Productos</NavLink>
                    <NavLink to={`/category/Imagenes`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Imagenes</NavLink>
                    <NavLink to={`/category/Contacto`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Contacto</NavLink>
                </div> 
            <CartWidget />                   
            </nav>
        </section>
    )
}

export default NavBar;