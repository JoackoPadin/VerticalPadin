import React from 'react'
import { Link } from 'react-router-dom';
import "./Item.css";

const Item = ({id, loteo, descripcion, numeroDeLote, imagen, precio}) => {
  return (
        <div className="container-fluid item">
          <div>
            <Link to={`/loteos/${id}`} >
              <img src={imagen} className="card-img-top img-fluid img" alt={loteo} />
            </Link>
          </div>
          <hr className='hrt'/>
          <div className="card-body">
                <h5 className="card-title text-center"><b>{loteo}</b></h5>
                <p className="card-text text-center precio">Numero de Lote {numeroDeLote}</p>
                <p className='card-text text-center precio'>{descripcion}</p>
                <br></br>
                <p className="card-text text-center">${precio}</p>
          </div>
        </div>
  )
}

export default Item;
