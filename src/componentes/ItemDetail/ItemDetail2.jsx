import React, { useContext, useState } from 'react'
import { cartContext } from '../Contexto/Context';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail2.css";
import { Link } from "react-router-dom";


const ItemDetail2 = ({item}) => {
  const {addItem} = useContext(cartContext);
  const [counter, setCounter] = useState(0);
  
  const onAdd = (counter) =>{
    setCounter(counter);
    addItem (item, counter);
  }



  return (
    <div className='container py-5'>
      <div className="row">
          <div className="col-md-8 offset-md-2 p-5">
              <div className="card mb-3">
                <div className='row g-0'>
                  <div className='col-md-4 d-flex'>
                    <img src={item.imagen} alt={item.loteo} className="img-fluid imagen" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                        <div className='cardText'>
                        <h3 className="card-title">{item.loteo}</h3>
                        <h4 className="card-text">{item.descripcion}</h4>
                        <h4 className="card-text"><small >${item.precio}.-</small></h4>
                        {counter === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn botonCarrito">Ir al Carrito</Link>}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail2;
