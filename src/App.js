import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <><NavBar /><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hola coder</code>
        </p>
      </header>
    </div></>
  );
}

export default App;
