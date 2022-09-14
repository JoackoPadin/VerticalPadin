import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <div className='row'>
      {items.map(item => ( <div key={item.id} className="col-md-4 py-3">
        <Item loteo={item.loteo} imagen={item.imagen} precio={item.precio} numeroDeLote={item.numeroDeLote}  />
        </div>)
        )}
    </div>
  )
}

export default ItemList;
