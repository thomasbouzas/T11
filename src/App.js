import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConteiner';

function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner />

      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
