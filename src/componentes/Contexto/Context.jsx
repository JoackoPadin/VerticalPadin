import React, { useState, createContext  } from 'react';

//1.Crear contexto
export const cartContext = createContext();

//2.Crear Provider
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
    };

    const cartTotal = () => {
      return cart.reduce((total, item) => total+=item.cantidad, 0)
    };

    const montoTotal = () =>{
      const copia = [...cart]
      let count = 0
      copia.forEach((producto) =>{
        count = count + producto.cantidad * producto.precio
      })
      return count
    };
    
    const clearOne = (id) => {
      const productosFiltrados = cart.filter((prod) => prod.id !== id)
      setCart(productosFiltrados);
    };

    return (
      <cartContext.Provider value={{cart, addItem, clear, cartTotal, montoTotal, clearOne}}>
        {children}
      </cartContext.Provider>
    )
}

export default Provider
