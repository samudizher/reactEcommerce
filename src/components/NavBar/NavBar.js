import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss"






export const NavBar = () => {

    return(
        <header className="NavBar">

            <div className="divLinkLeft">

            <Link to ="/" className="linkNavLeft">Home</Link>
            <Link to ="/productos" className="linkNavLeft">Productos</Link>
            <a href="#" className="linkNavLeft">Link numero 3</a>

            </div>

        <h2>Ejemplo NavBar</h2>

            <div className="divLinkRight">

                <a href="#" className="linkNavRight">Link numero 4</a>
                <a href="#" className="linkNavRight">Link numero 5</a>
                <a href="#" className="linkNavRight">Link numero 6</a>

            </div>
            
        <CartWidget/>

        </header>
    )
}