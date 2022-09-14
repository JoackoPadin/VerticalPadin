import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../Productos/Productos';

const ItemDetailContainer = () => {
  const [item, setItems] = useState({})


const {id} = useParams()

  useEffect(()=>{
    const getProducto = (id) =>
      new Promise((resolve, reject) => {
       const producto = productos.find((prod)=> prod.id === id)
        setTimeout(()=>{
         resolve(producto) 
        },500);
      });

      getProducto()
      .then((data)=>{
        setItems(data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }, [])
    
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer;
