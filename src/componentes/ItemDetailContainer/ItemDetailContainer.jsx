import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
//import { productos } from '../Productos/Productos';
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(()=>{
    //PARA MOSTRAR LOS PRODUCTOS DESDE UN MOCK//
    /*const getProducto = (id) =>
      new Promise((resolve, reject) => {
       const producto = productos.find((prod)=> prod.id === id)
        setTimeout(()=>{
         resolve(producto)
         setLoading(false); 
        },500);
      });

      getProducto(parseInt(id))
      .then((data)=>{
        setItems(data)
      })
      .catch((error)=>{
        console.log(error)
      })*/
      const db = getFirestore();
      const response = doc(db, "Productos", id);
      getDoc(response).then ((snapShot) =>{
        if (snapShot.exists()) {
          setItems({id:snapShot.id, ...snapShot.data()});
          setLoading(false);
        } 
      })
    }, [id])
    
  return (
    <div>
      {loading ? <Loading /> : <ItemDetail item={item} /> }
    </div>
  )
}

export default ItemDetailContainer;
