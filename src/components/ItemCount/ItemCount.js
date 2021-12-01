import React, {useState} from "react";
import "./ItemCount.css"
const ItemCount = ({}) => {

    const [contador, setContado]= useState(0)

     const onClick = () => {

        if (contador < 10) {
          setContado (contador + 1 )
        }
     }

    const onClickTwo = () => {
        if (contador > 0 ) {
            setContado (contador - 1)
        }
    }

    const agregarCarro = () => {
        if (contador > 0) {
            console.log({contador});
        }
    }

    return (
        <><><button onClick={onClick}> + </button><span> {contador} </span><button onClick={onClickTwo}> - </button></><button onClick={agregarCarro}> AGREGAR AL CARRITO </button></>

    )
}

export default ItemCount