import { useContext } from "react";
import { Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.scss"

export const CartWidget = () =>{

    const {totalCarrito} = useContext(CartContext)

    return(
        <div className="cartWidgetContainer">
            <div>
                <AiOutlineShoppingCart className="cartIcon"/>              
            </div>
            <div className="spanQtyCart">
                <span>{totalCarrito()}</span>
            </div>
        </div>
    )
}