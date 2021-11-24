import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss"



export const NavBarMenu = () => {

    return(
        <>
            <Navbar className="navBar" variant="light">
            <Container>
            <Navbar.Brand className="title">Metropoli Music</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to ="/" className="linkNav">Home</Link></Nav.Link>
                <Nav.Link><Link to ="/productos" className="linkNav">Productos</Link></Nav.Link>
                <CartWidget/>
            </Nav>
            </Container>
            </Navbar>
      </>
    )
}




//<Link to ="/" className="linkNavLeft">Home</Link>
//<Link to ="/productos" className="linkNavLeft">Productos</Link>
//<a href="#" className="linkNavLeft">Link numero 3</a>