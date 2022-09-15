import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, loteo, descripcion, numeroDeLote, imagen, precio}) => {
  return (
        <div className="card">
            <Link to={`/loteos/${id}`} >
              <img src={imagen} className="card-img-top" alt={loteo} />
            </Link>
            <div className="card-body">
                <h5 className="card-title text-center"><b>{loteo}</b></h5>
                <p className="card-text text-center">${precio}</p>
                <p className="card-text text-center">Numero de Lote {numeroDeLote}</p>
            </div>
        </div>
  )
}

export default Item;
