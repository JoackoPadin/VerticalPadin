import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
//import { productos } from '../Productos/Productos';
import Loading from '../Loading/Loading';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { useParams } from "react-router-dom";


const ItemListContainer = () =>{
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect (()=> {
    //PARA MOSTRAR LOS PRODUCTOS DESDE UN MOCK//
   /*  const getProductos = new Promise((resolve)=>{
       /* setTimeout(()=> {
            resolve(productos);
            
            
            productos.forEach(item => {
                addDoc(itemColeccion, item)
            })
            setLoading(false); 
        }, 2000);
    });
    getProductos.then ((respuesta)=>{
        setItems(respuesta);
    });*/
    const db = getFirestore();
    const itemColeccion = collection(db, "Productos");
    const queryItems = id ? query(itemColeccion, where("categoria", "==", id)) : itemColeccion;
    getDocs(queryItems).then ((snapShot) => {
        if (snapShot.size > 0) {
            setItems (snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            setLoading(false);   
        }
    });    
  }, [id]);
    
    return (
        <div className="container">
           {loading ? <Loading /> : <ItemList items={items} /> } 
        </div>
    );
}

export default ItemListContainer;
