import React, {useState} from "react";
import "./ItemCount.css"


const ItemCount = ({onConfirm}) => {
   const [count, setCount] = useState(1)
  

   const sumar = () => {
       if(count < 10) {
           setCount(count + 1)
       }

    }
    
    const restar = () => {
        if(count > 0) {
            setCount(count - 1)
        }

    }

   

   return (
       <div>
           <p>{count}</p>
           <button onClick={sumar}> + </button>
           <button onClick={restar}> - </button>
           <button onClick={() => onConfirm(count)}>Agregar al carro</button>
       </div>
   )
 }

export default ItemCount