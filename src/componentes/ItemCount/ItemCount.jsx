import React, { useState, useEffect  } from "react";
import { cartContext } from "../Contexto/Context";

const ItemCount = ({ initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock]= useState(stock);
    //const [cantidad, setCantidad]= useState(initial);

    const decrementarCantidad = (valor) => {
        if (valor > 0) {
            setCounter(valor);
        }     
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCounter(valor);
        }
    }
    const agregarProducto = () =>{
        if (counter <= itemStock) {
            onAdd(counter);
        setItemStock (itemStock - counter);
        setCounter(itemStock - counter);
        //setItemAdd(itemAdd + cantidad);    
        }
        
    }
    useEffect (()=> { setItemStock(stock);
    }, [stock]);

    return(
    <div className="container py-5">
        <div className="container row">
            <div className="col-md-2 ">
                <div className="input-group">
                    <input type="button" className="btn btn-secondary" value="-" onClick={()=>
                        {decrementarCantidad(counter - 1)}} /> 
                    <input type="text" className="form-control" value={counter} onChange={()=>{}} />
                    <input type="button" className="btn btn-secondary" value="+" onClick={()=>
                        {incrementarCantidad(counter + 1)}} />
                </div>
                <div className="d-grid gap-2 py-2">
                    <input type="button" className="btn btn-secondary" value="Agrega tu lote" onClick={ ()=>
                    {agregarProducto()}} />
                </div>
            </div>
        </div>         
    </div>
   
    );
}

export default ItemCount;