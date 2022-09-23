import React, { useContext, useState } from 'react'
import { cartContext } from '../Contexto/Context';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {
  const {addItem} = useContext(cartContext);
  const [counter, setCounter] = useState(0);
  
  const onAdd = (counter) =>{
    setCounter(counter);
    addItem (item, counter);
  }

  return (
    <div className='container-sm contenedor text-center ' >
      <div className='row'>
        <div className='col'>
          <img src={item.imagen} alt={item.loteo} className='img-fluid img' />
          <div className='contenedorCard'>
            <h3>{item.loteo}</h3>
            <p>{item.descripcion}</p>
            <h4>${item.precio}.-</h4>
            {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn botonCarrito">Ir al Carrito</Link>}
          </div>
        </div>
      </div>  
    </div>
    
  )
}

export default ItemDetail;
