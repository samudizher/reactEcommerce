import { useEffect, useState } from "react";
import { TraerDatos } from "../../helpers/TraerDatos";
import { ItemList } from "../ItemList/ItemList";

import "./ItemListContainer.scss";





export const ItemListContainer = () =>{

    const [loader, setLoader] = useState(false);
    const [productos, setProductos] = useState([]);
        

        useEffect( () =>{

            setLoader(true);

            TraerDatos()
            .then((response) =>{
                setProductos(response)
            })
            .catch((error) =>{
                console.log(error);
            })
            .finally(() =>{
                setLoader(false)
            });
    
    
        }, [])
    
 

    return(
        <>
                {
                    loader
                        ? <h2 className= "loaderTitle">Cargando...</h2>
                        : <ItemList productos={productos}/>

                }

        </>

    )
}
