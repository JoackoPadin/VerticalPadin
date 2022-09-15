import './App.css';
import Header from './componentes/Header/Header';
import ItemCategoria from './componentes/ItemCategoria/ItemCategoria';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {Routes, Route} from "react-router-dom";
import Footer from './componentes/Footer/Footer';



function App() {
  return (
   <div className=' fondo-marron'>
    <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/loteos/:id' element={<ItemDetailContainer/>} />
        <Route path='/categoria/:categoria' element={<ItemCategoria/>} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
