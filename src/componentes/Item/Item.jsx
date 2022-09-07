import React from 'react'

const Item = ({id, loteo, descripcion, numeroDeLote, imagen, precio}) => {
  return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={loteo} />
            <div className="card-body">
                <h5 className="card-title text-center"><b>{loteo}</b></h5>
                <p className="card-text text-center">${precio}</p>
                <p className="card-text text-center">Numero de Lote {numeroDeLote}</p>
            </div>
        </div>
  )
}

export default Item;
