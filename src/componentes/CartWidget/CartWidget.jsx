import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from '../Contexto/Context';
import "./CartWidget.css";  
import Cart from '../Imagenes/shopping-cart.png';
import Trash from '../Imagenes/trash.png';


const CartWidget = () => {
    const {cartTotal, clear} = useContext(cartContext);

    return (
        <div className="container icono-carrito justify-content-end">
            <div className="row ">

                <div className="col-6 colum">
                <Link to= {"/cart"}>
                    <button type="button" className="btn position-relative botones me-1" title="Ir al Carrito" >
                        <img className="icono img-fluid" src={Cart} alt="Carrito"/>
                    </button>  
                    <span className=" translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>    
                </Link>
                </div>

                <div className="col-6 colum">
                    <button type="button" className="btn position-relative me-1 botones " title="vaciar carrito"
                        onClick={()=> {clear()}}>
                        <img className="icono img-fluid" src={Trash} alt="Cesto"/>
                    </button>
                </div>
          </div>      
        </div>
    );
}

export default CartWidget;