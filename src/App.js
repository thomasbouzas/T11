import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import { TestContext } from './components/Context/cartContext';

function App() {


  return (
    <div className="App">
  <TestContext.Provider value={"Thomas"}>
    <BrowserRouter>
        <NavBar />
       <Switch>
      <Route exact path="/">
        <ItemListConteiner />
         </Route>      
         <Route exact path="/detail/:getId">
           <ItemDetailContainer/>
         </Route>
        </Switch>
      </BrowserRouter>
    </TestContext.Provider>
         
    </div>
  );
}

export default App;
