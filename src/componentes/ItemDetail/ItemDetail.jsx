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
    <div className='container contenedor text-center' >
      <div className='row'>
        <div className='col'>
          <img src={item.imagen} alt={item.loteo} className='img-fluid' />
          <div className='container contenedorCard'>
            <h2>{item.loteo}</h2>
            <p>{item.descripcion}</p>
            <h3>${item.precio}.-</h3>
            {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn">Ir al Carrito</Link>}
          </div> 
        </div>
        
      </div>
        
    </div>
    
  )
}

export default ItemDetail;
