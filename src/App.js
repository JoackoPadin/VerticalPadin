import './App.css';
import Header from './componentes/Header/Header';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {Routes, Route} from "react-router-dom";



function App() {
  return (
   <div className=' fondo-marron'>
    <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/loteos/ :id' element={<ItemDetailContainer/>} />
      </Routes>
   </div>
  );
}

export default App;
