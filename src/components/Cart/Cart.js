import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Cart.scss'


export const Cart = () =>{

    const {carrito, vaciarCarrito, totalCarrito, totalCompra, removerCarrito} = useContext(CartContext)


    return(
        <div>

            {
                carrito.length > 0
                ?
                <>
                    <h2>Carrito</h2>
                    <hr/>
                        <h4>Productos: {totalCarrito()}</h4>
                        <h4>Total: ${totalCompra()}</h4>
                    <hr/>
                    <div>
                        {
                        carrito.map((producto) => (
                            <div className="cartContainer">
                                <div>
                                    <img src={producto.img} className="imgCart"></img>
                                </div>
                                <div className="dataCarContainer">
                                    <div>
                                        <h5>Producto: {producto.nombre}</h5>
                                        <h6>Precio p/pieza: ${producto.precio}</h6>
                                        <h6>Cantidad: {producto.cant}</h6>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary trashIcon" onClick= {() =>{ removerCarrito(producto.id) }}><BsFillTrashFill/></button>
                                    </div>
                                </div>
                            </div>
                        ))   
                        }
                    </div>
                    <hr/>
                    <div className="botonera">
                        <button className="btn btn-primary" onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <button className="btn btn-primary otroBoton">otro Boton</button>
                    </div>
                </>
                 :
                <div className="cartVacio">
                    <h2>El carrito esta vacio</h2>
                    <Link to="/productos"><button className="btn btn-primary">Ir a comprar</button></Link>
                </div>
            }

        </div>

    )
}