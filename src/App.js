import './App.css';
import Header from './componentes/Header/Header';
import ItemCategoria from './componentes/ItemCategoria/ItemCategoria';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { Routes, Route } from "react-router-dom";
import Footer from './componentes/Footer/Footer';
import Provider from "./componentes/Contexto/Context";
import Cart from "./componentes/Cart/Cart";



function App() {
  return (
   <div className=' fondo-marron fuente'>
   <Provider>
      <Header/>
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>} />
          <Route path='/loteos/:id' element={<ItemDetailContainer/>} />
          <Route path='/categoria/:categoria' element={<ItemCategoria/>} />
          <Route path='/cart' element= {<Cart />} />
        </Routes>
      <Footer />
    </Provider>
   </div>
  );
}

export default App;
