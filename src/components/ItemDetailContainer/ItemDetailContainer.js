import { useEffect, useState } from "react"
import "./ItemDetailContainer.scss"
import {TraerDatos} from '../../helpers/TraerDatos'
import { useParams } from "react-router"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () =>{


    const [producto, setProducto] = useState();
    const [loader, setLoader] = useState(false)


    const { productoId }= useParams()

    console.log(productoId);

    useEffect( () =>{

        setLoader(true)

        TraerDatos()
            .then(response =>{
                setProducto(response.find(productos => productos.id === Number(productoId)) )
            })
            .finally(() => {
                setLoader(false)
            })
    }, [])

    return(
        <>
            <h2>Detalle de producto</h2>

            {
                loader
                ? <h2 className= "loaderTitle">Cargando...</h2>
                : <ItemDetail {...producto}/>
            }

        </>
    )
}