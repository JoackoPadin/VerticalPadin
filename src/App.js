import './App.css';
import Header from './componentes/Header/Header';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
   <div className=' fondo-marron'>
    <Header/>
      <ItemListContainer />
      <ItemCount stock={5} initial={1} onAdd={0} />
      <ItemDetailContainer />
   </div>
  );
}

export default App;
