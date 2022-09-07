import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import imagenLoteo1 from '../../componentes/Imagenes/loteo11.jpg';
import imagenLoteo3 from '../../componentes/Imagenes/loteo3.jpeg';


const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    
    useEffect (()=> {
      const productos = [
        {"id":1, "loteo":"Dalmacio Velez","descripcion":"Sobre la avenida","numeroDeLote":10,"imagen":imagenLoteo1,"precio":4500},
        {"id":2, "loteo":"Dalmacio Velez","descripcion":"Costado Norte","numeroDeLote":11,"imagen":imagenLoteo1,"precio":2500},
        {"id":3, "loteo":"Dalmacio Velez","descripcion":"Costado Sur","numeroDeLote":12,"imagen":imagenLoteo3,"precio":3500},
        {"id":4, "loteo":"Dalmacio Velez","descripcion":"Vista a la Montaña","numeroDeLote":13,"imagen":imagenLoteo1,"precio":4750},
        {"id":5, "loteo":"Dalmacio Velez","descripcion":"Lado Este","numeroDeLote":14,"imagen":imagenLoteo3,"precio":3000},
        {"id":6, "loteo":"Dalmacio Velez","descripcion":"Lado Norte","numeroDeLote":15,"imagen":imagenLoteo3,"precio":3700},

    ];
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