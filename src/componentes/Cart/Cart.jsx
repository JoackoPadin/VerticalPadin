import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../Contexto/Context';

const Cart = () => {
  const {cart, clearOne, clear, montoTotal, carTotal} = useContext(cartContext)
  
  if (cart.length === 0) {
    return ( <h2>No has elegido nada aun, volve al <Link to='/'>Catalogo</Link></h2>)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
      {cart.map((producto) =>(
        <div key={producto.id}>
          <h2>Loteo: {producto.loteo}</h2>
          <h3>Cantidad {producto.cantidad}</h3>
          <button onClick={()=>clearOne(producto.id)}>Eliminar</button>
        </div>
      ))}
        </div>
      <button onClick={ clear }>Eliminar Todo</button>
      <h4>TOTAL ${montoTotal()}.-</h4>
      </div>
    </div>
  )
  
}

export default Cart;
