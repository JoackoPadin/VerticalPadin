import React, { useState, useEffect  } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock]= useState(stock);
    

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
           
        }
        
    }
    useEffect (()=> { setItemStock(stock);
    }, [stock]);

    return(
        <div className="container py-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-3 ">
                    <div className="input-group imputGroup">
                        <input type="button" className="btn btn-secondary botones" value="-" onClick={()=>
                            {decrementarCantidad(counter - 1)}} /> 
                        <input type="text" className="form-control" value={counter} onChange={()=>{}} />
                        <input type="button" className="btn btn-secondary botones" value="+" onClick={()=>
                            {incrementarCantidad(counter + 1)}} />
                    </div>
                    <div className="d-grid gap-2 py-2 d-flex justify-content-center align-items-center">
                        <input type="button" className="btn botonAgregaLote" value="Agrega tu lote" onClick={ ()=>
                        {agregarProducto()}} />
                    </div>
                </div>
            </div>         
        </div>
    );
}

export default ItemCount;