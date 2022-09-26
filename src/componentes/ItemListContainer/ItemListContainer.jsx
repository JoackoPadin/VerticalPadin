import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { productos } from '../Productos/Productos';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    
    useEffect (()=> {
    
    const getProductos = new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(productos);
            const db = getFirestore();
            const itemColeccion = collection(db, "Productos");
            productos.forEach(item => {
                addDoc(itemColeccion, item)
            })
        }, 2000);
    });
    getProductos.then ((respuesta)=>{
        setItems(respuesta);
    });  
    },[]);
    
    return (
        <div className="container">
            <ItemList items={items} />
        </div>

    );
}

export default ItemListContainer;