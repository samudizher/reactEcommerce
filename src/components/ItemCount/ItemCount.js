
import {Button} from "react-bootstrap"
import './ItemCount.scss'


export const ItemCount = ({maximo, cant, setCant, onAdd}) =>{

    const handlerRestar = () => {
        if(cant > 0){
            setCant(cant - 1)
        }
    }

    const handlerSumar = () => {
        if(cant < maximo){
            setCant(cant + 1)
        }

    }


    return(
        <> 
            <button className="btn btn-primary button+" onClick={handlerRestar}>
                -
            </button>

                <span className="spanQty">{cant}</span>

            <button className="btn btn-primary button+" onClick={handlerSumar}>
                +
            </button>

            <div>
                <Button variant="primary" className="m-5" onClick={onAdd}>Agregar</Button>
            </div>
        </>


    )
}