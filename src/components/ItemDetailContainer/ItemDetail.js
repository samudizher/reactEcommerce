import { Container } from "react-bootstrap"

export const ItemDetail = ( ({id, img, nombre, precio, stock, descripcion}) =>{



    console.log(id, nombre, precio);

    return(
        <>
        
            <h2>Detalle de producto</h2>

                <Container className="detailContainer">
                        <h3>{nombre}</h3>
                        <div className="containerImgDetails">
                            <img src={img} alt={nombre}></img>
                            <div className="details">
                                <p>Precio: ${precio}</p>
                                <p>Disponibles: {stock} piezas</p>
                                <p>{descripcion}</p>
                            </div>
                        </div>
                </Container>
        </>
    )
})