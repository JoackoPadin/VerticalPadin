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
            <h3>Cantidad {producto.cantidad}</h3>
          </div>
          <div className='col-2'>
            <h2>$ {producto.precio}</h2>
          </div>
          <div className='col-2'>
            <button onClick={()=>clearOne(producto.id)} className='btnCart'>Eliminar</button>
          </div>
        </div>
      ))}
        <hr className='hrt'/>
        <div className='d-flex row m-5'>
          <div className='col-3'>
            <button onClick={ clear } className='btnCart'>Eliminar Todo</button>
          </div>
          <div className='col-3'>
            <h4>TOTAL  ${montoTotal()}.-</h4>
          </div>
        </div>
      </div>
  )
  
}

export default Cart;
