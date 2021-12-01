import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

function App() {

  
const sujeto = {

  nombre: "Coca cola",
  urlImagen: "https://fruvitt.com/wp-content/uploads/2020/07/IMG-20200718-WA0204-300x300.jpg",
  precio: "50$",
  initial:  "1",
  stock: "10",

  nombre2: "Pepsi",
  urlImagen2: "https://alfanea.com.ar/wp-content/uploads/2020/09/Pepsi-Light-x-2.25-L-300x300.jpg",
  precio2: "40$",
  initial2:  "1",
  stock2: "10",

  nombre3: "Manaos",
  urlImagen3: "https://autoservicio-el-rober.tiendalite.com/images/products/300/300/795-399.jpg",
  precio3: "40$",
  initial3:  "1",
  stock3: "10"
}

  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner sujeto={sujeto} />
      
    </div>
  );
}

export default App;
