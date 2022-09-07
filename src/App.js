import './App.css';
import Header from './componentes/Header/Header';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
   <div className=' fondo-marron'>
    <Header/>
      <ItemListContainer />
      <ItemCount stock={5} initial={1} onAdd={0} />
   </div>
  );
}

export default App;
