import { Container,Card,Row,Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./ItemList.scss";





export const ItemList = ({productos}) =>{

    return(
        <Container>
            <h2>Productos</h2>
                <hr/>
                <Container className="filterContainer">
                        <Link to ={"/productos"} className="filterLink">Todos</Link>
                        <Link to ={"/productos/Amplificador"} className="filterLink">Amplificador</Link>
                        <Link to ={"/productos/Guitarra_Acustica"} className="filterLink">Guitarra Acustica</Link>
                        <Link to ={"/productos/Guitarra_Electrica"} className="filterLink">Guitarra Electrica</Link>
                </Container>

                <hr/>
                <Row> 
                    {productos.map( (producto) => (
                        <Card key={producto.id} className="productCard card m-3" style={{ width: '18rem' }}>
                        <img src={producto.img} alt={producto.nombre} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>Precio: ${producto.precio}</Card.Text>
                            <Card.Text>Disponibles: {producto.stock}</Card.Text>
                            <Button variant="primary" className="m-3">Agregar</Button>
                            <Link to={`/detail/${producto.id}`}><Button variant="primary">Ver Detalle</Button></Link>
                        </Card.Body>
                        </Card>
                    ))}
                </Row>
        </Container>
    )
}