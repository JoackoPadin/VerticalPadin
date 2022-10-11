import React, { useState, useContext } from 'react'
import { cartContext } from '../Contexto/Context';
import { getFirestore, collection, addDoc} from "firebase/firestore"
import Success from "../Success/Success";


const Checkout = () => {
    const {cart, clear, cartTotal, montoTotal} = useContext(cartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        const buyer = {name: nombre, email:email, phone:telefono};
        const items = [];
        cart.forEach((item) => {
            items.push({id:item.id, title:item.loteo, price:item.precio, quantity:item.cantidad});
        })
        const order = {buyer:buyer, items:items, date:new Date(), total:montoTotal()};
        const db = getFirestore();
        const orderCollection= collection(db, "Contactos");
        addDoc(orderCollection, order).then(({id}) =>{
            setOrderId(id);
            clear();
        });   

    }

  return (
    <div className="container-fluid py-5 contPadre">
            {cartTotal() > 0 ?
            <div className="row compra">
                <div className="col-md-4 offset-md-2">
                        <div class="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => {sendOrder()}}>Generar Orden</button>
                </div>
                <div className="col-md-4">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={item.imagen} alt={item.loteo} title={item.loteo} width="120" /></td>
                                    <td className="text-start align-middle">{item.loteo} x {item.cantidad}</td>
                                    <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-end fw-bold">Total a Pagar</td>
                                <td className="text-end fw-bold">${montoTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            : orderId !== "" ? <Success id={orderId} total={montoTotal()} /> : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
  )
}

export default Checkout
