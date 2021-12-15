import "./Item.css"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const InputCount = ({onConfirm, maxQuantity}) => {
  const [count, setCount] = useState()


const handleChange = ({target}) => {
    if (target.value <= maxQuantity && target.value >= 0) {
      setCount(target.value)
    }
  }

    return (
      <div>
            <input type="number" onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}> Agregar al carrito </button>
      </div>
  )
}

const ButtonCount = ({onConfirm, maxQuantity}) => {

  const [count, setCount] = useState (0)


  const increment = () => {
      if ( count < maxQuantity ) {
          setCount(count + 1)
      }
      
  }

  const decrement = () => {
      if (count > 0) {
        setCount (count - 0)
      }
  }
  
  return (
    <div>
        <span> {count}  </span> 
        <button onClick={increment}>-</button>
        <button onClick={decrement}>+</button>
        <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
    </div>
  )
  }


const Item = ({name, url, stock, inputType = "input" }) => {
      
  const addToCart = () => {
    console.log(`Agregado al carrito`)
  }

  const Count = inputType === "input" ? InputCount : ButtonCount

 

    return (

      
      <><h3>{name}</h3>
      
      <div class="parent" >

        <div class="div1">

          <img src={url} alt={name}/>
          <br></br>
    
          <Link to={`/detail`}>VER DETALLE</Link>

        </div>
        

          <Count onConfirm={addToCart} maxQuantity={stock}/>
          
        
      </div></>
        
    )
    }

export default Item
