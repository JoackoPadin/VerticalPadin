import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from '../Contexto/Context';
import "./CartWidget.css";  
import Cart from '../Imagenes/shopping-cart.png';
import Trash from '../Imagenes/trash.png';


const CartWidget = () => {
    const {cartTotal, clear} = useContext(cartContext);

    return (
        <div className="icono-carrito">
            <button type="button" className="btn position-relative me-1btn fondo_naranja position-relative me-1" title="vaciar carrito"
             onClick={()=> {clear()}}>
                <img className="iconoCarrito" src={Trash} alt="Cesto"/>
            </button>
            <Link to= {"/cart"}>
            <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito" >
                <img className="iconoCarrito" src={Cart} alt="Carrito"/>
            </button>  
            <span className=" translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>    
            </Link>
        </div>
    );
}

export default CartWidget;