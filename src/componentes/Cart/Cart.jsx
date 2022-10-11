import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../Contexto/Context';
import "./Cart.css";

const Cart = () => {
  const {cart, clearOne, clear, montoTotal} = useContext(cartContext)
  
  if (cart.length === 0) {
    return ( 
    <div className='container-fluid'>
      <div className='sinProductos'>
        <h3>Aun no tenes productos</h3>
        <button className='btnCart'>Volve al <Link className style={{"text-decoration":'none', 'color':"white"}} to='/'>Catalogo</Link></button>
      </div>
    </div>
    )}

  return (
    <div className='container-fluid contPadre '>
      <div className='marco'>
      {cart.map((producto) =>(
        <div key={producto.id} className="m-5 d-flex row text-center">
          <div className='col-2'>
            <img src={producto.imagen} width="120px" height="120px" alt={producto.loteo} />
          </div>
          <div className='col-3'>
            <h4>Loteo: {producto.loteo}</h4>
            <br />
            <p>{producto.descripcion}</p>
          </div>
          <div className='col-3'>
            <h3>Cantidad: {producto.cantidad}</h3>
          </div>
          <div className='col-2'>
            <h4>$ {producto.precio}</h4>
          </div>
          <div className='col-2'>
            <button onClick={()=>clearOne(producto.id)} className='btnCart'>Eliminar</button>
          </div>
        </div>
      ))}
        <h3 className='montoTotal'>TOTAL  ${montoTotal()}.-</h3>
        <div className='EliminarDiv'>
        <button onClick={ clear } className='btnCart2'>Eliminar Todo</button>
        </div>
        <hr className='hrt'/>
          <div className='col-3 finalCompra'>
            <Link to={'/Checkout'} title="Finalizar Compra">
              <button className='btn btnCart'>Finalizar Compra</button>
            </Link>
          </div>
        </div>
      </div>
  )
  
}

export default Cart;
