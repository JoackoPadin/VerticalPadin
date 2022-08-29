import './App.css';
import Header from "./componentes/Header"
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
   <div className='contair'>
      <Header />
      <ItemListContainer texto="VENTA DE LOTES" />
   </div>
  );
}

export default App;
