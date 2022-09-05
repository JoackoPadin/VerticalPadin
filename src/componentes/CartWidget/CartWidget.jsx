import React from "react";
import "./CartWidget.css";  
import Cart from '../Imagenes/shopping-cart.png' 


const CartWidget = () => {

    return (
            <div> 
                <img className="iconoCarrito" src={Cart} alt="Carrito"/>
            </div>

    );
}

export default CartWidget;