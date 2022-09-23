import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <div className='container'>
    <div className='row d-flex justify-content-center align-items-center'>
      {items.map(item => ( <div key={item.id} className="col-md-4 py-3">
        <Item id={item.id} loteo={item.loteo} imagen={item.imagen} precio={item.precio} numeroDeLote={item.numeroDeLote}  />
        </div>)
        )}
    </div>
    </div>
  )
}

export default ItemList;

