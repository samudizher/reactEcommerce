import { Container,Card,Row,Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import "./ItemList.scss";





export const ItemList = ({productos}) =>{


    const [numprod, setNumProd] = [""]; 

    return(
        <Container>
            <h2>Productos</h2>
                <hr/>
                <Row> 
                    {productos.map( (producto) => (
                        <Card key={producto.id} className="productCard card m-3" style={{ width: '18rem' }}>
                        <img src={producto.img} alt={producto.nombre} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>Precio: ${producto.precio}</Card.Text>
                            <Card.Text>{producto.stock}</Card.Text>
                            <Card.Text>{producto.descripcion}</Card.Text>
                            <Button variant="primary" className="m-3">Agregar</Button>
                            <Link to ="/detail"><Button variant="primary">Ver Detalle</Button></Link>
                        </Card.Body>
                        </Card>
                    ))}
                </Row>
        </Container>
    )
}