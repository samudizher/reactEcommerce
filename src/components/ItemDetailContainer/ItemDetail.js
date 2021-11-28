import { useState } from "react";
import { Container, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetailContainer.scss"

export const ItemDetail = ( ({id, img, nombre, precio, stock, descripcion}) =>{


    const [cant, setCant] = useState(0);
    const [agregado, setAgregado] = useState(false);


    const handlerAgregar = () =>{

        if(cant > 0){
            
            
            setAgregado(true)

            console.log("Item Agregado",{
                id,
                img,
                nombre,
                precio,
                cant,
            });
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
                                    !agregado
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