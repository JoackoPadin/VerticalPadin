import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { productos } from '../Productos/Productos';


const ItemCategoria = () => {
  const [items, setItems] = useState([])


const {categoria} = useParams()

  useEffect(()=>{
    
    const getProducto = () =>
      new Promise((resolve, reject) => {
       const producto = productos.filter((prod)=> prod.categoria === categoria);
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
       <ItemList items={items} />
    </div>
  )
}

export default ItemCategoria;
