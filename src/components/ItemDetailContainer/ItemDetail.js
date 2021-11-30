import { useContext, useState } from "react";
import { Container, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetailContainer.scss"

export const ItemDetail = ( ({id, img, nombre, precio, stock, descripcion}) =>{

    const {agregarCarrito, isInCart} = useContext(CartContext)

    const [cant, setCant] = useState(0);
    const [agregado, setAgregado] = useState(false);


    const handlerAgregar = () =>{

        if(cant > 0){

            agregarCarrito({
                id,
                img,
                nombre,
                precio,
                stock,
                cant
            })

            setAgregado(true)
        }
            

    }

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

                                {
                                    !isInCart(id)
                                    ?
                                            <div>
                                                <ItemCount maximo={stock} cant={cant} setCant={setCant} onAdd={handlerAgregar}/>
                                            </div>
                                    :
                                    <Link to="/cart"><Button variant="primary" className="m-5">Terminar Compra</Button></Link>
                                }  

                            </div>
                        </div>

                </Container>
        </>
    )
})