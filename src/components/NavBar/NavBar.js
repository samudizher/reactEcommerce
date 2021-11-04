import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss"

export const NavBar = () => {

    return(
        <header className="NavBar">

            <div className="divLinkLeft">

            <a href="#" className="linkNavLeft">Link numero 1</a>
            <a href="#" className="linkNavLeft">Link numero 2</a>
            <a href="#" className="linkNavLeft">Link numero 3</a>

            </div>

        <h2>Banda abogados</h2>

            <div className="divLinkRight">

                <a href="#" className="linkNavRight">Link numero 4</a>
                <a href="#" className="linkNavRight">Link numero 5</a>
                <a href="#" className="linkNavRight">Link numero 6</a>

            </div>
            
        <CartWidget/>

        </header>
    )
}