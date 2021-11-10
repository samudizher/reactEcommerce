import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import './ItemCount.scss';

export const ItemCount = () =>{

    

    const [valorContador, modificarContador] = useState(0);
    const stock = 10;

    
    const aumentar = () =>{
        if(valorContador < stock){        
            modificarContador (valorContador + 1)
        }
        else{
            alert("Ya no hay mas piezas disponibles")
        }

    }


    const disminuir = () =>{
        if(valorContador > 0){
            modificarContador (valorContador - 1)
        }
        else{
            alert("No puedes tener cantidades menores a cero")
        }
    }





    return(
        <div className="contenedorCard">
            <Card style={{ width: '25rem' }} className="card">
            <Card.Body>
                <Card.Title className="cardTitle" >Contador</Card.Title>
                <Card.Text>
                <h3>{valorContador}</h3>
                </Card.Text>
                <Card.Link className="contadorBtn" onClick={disminuir}>Quitar</Card.Link>
                <Card.Link className="contadorBtn" onClick={aumentar}>Agregar</Card.Link>
            </Card.Body>
            </Card>
        </div>

    )
}