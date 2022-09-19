import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { productos } from '../Productos/Productos';


const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    
    useEffect (()=> {
    
    const getProductos = new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(productos);
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