import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (
    <div className="App">

    <BrowserRouter>
        <NavBar />
       <Switch>
      <Route exact path="/">
        <ItemListConteiner />
         </Route>      
         <Route path="/detail/:getId">
           <ItemDetailContainer/>
         </Route>
        </Switch>
      </BrowserRouter>

         
    </div>
  );
}

export default App;
