import { Container } from "react-bootstrap"
import { ItemList } from "../ItemList/ItemList"

export const ItemDetail = ( ({id, img, nombre, precio, stock, descripcion}) =>{



    console.log(id, nombre, precio);

    return(
        <>
        
            <h2>Detalle de producto</h2>

                <Container className="detailContainer">
                        <h3>{nombre}</h3>
                        <img src={img} alt={nombre}></img>
                        <p>Precio: ${precio}</p>
                        <p>Disponibles: {stock} piezas</p>
                        <p>{descripcion}</p>
                </Container>
        </>
    )
})