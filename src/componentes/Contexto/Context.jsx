import React, { useState, createContext  } from 'react';

export const cartContext = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState ([]);
    

    const addItem = (Item, cantidad) => {
      if (isInCart (Item.id)){
        let producto = cart.find (x => x.id === Item.id)
        cart[cart.indexOf(producto)].cantidad += cantidad;
        setCart([...cart]);
      } else {
        setCart([...cart, {...Item, cantidad:cantidad}]);
      }
    }
    const clear = () => {
      setCart([]);
    }

    const isInCart = (id) => {
      return cart.some(Item => Item.id === id)
    }

    const cartTotal = () => {
      return cart.reduce((total, item) => total+=item.cantidad, 0)
    }

    return (
      <cartContext.Provider value={{cart, addItem, clear, cartTotal}}>
        {children}
      </cartContext.Provider>
    )
}

export default Provider
