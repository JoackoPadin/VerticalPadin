import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  return (
    <div >
      <img src={item.imagen} alt={item.loteo} />
      <div>
        <h2>{item.loteo}</h2>
        <p>{item.descripcion}</p>
        <h3>${item.precio}.-</h3>
        <ItemCount stock={10} initial={1} />
      </div>
      
    </div>
  )
}

export default ItemDetail;
