import React, {useState} from "react";

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
        <><div className="contador">
             <div className="contadoruno">

                 <button onClick={onClick}> + </button>
                 <span> {contador} </span>
                 <button onClick={onClickTwo}> - </button>

             </div>

             <div className="contradordos">

                 <button onClick={onClick}> + </button>
                 <span> {contador} </span>
                 <button onClick={onClickTwo}> - </button>

             </div>

             <div className="contadortres">

                 <button onClick={onClick}> + </button>
                 <span> {contador} </span>
                 <button onClick={onClickTwo}> - </button>

             </div>

         </div><div className="buy">

                 <div className="buno">

                     <button onClick={agregarCarro}> AGREGAR AL CARRITO </button>

                 </div>

                 <div className="bdos">

                     <button onClick={agregarCarro}> AGREGAR AL CARRITO </button>

                 </div>

                 <div className="btres">

                     <button onClick={agregarCarro}> AGREGAR AL CARRITO </button>

                 </div>
             </div></>
        
        
            
     )

}

export default ItemCount