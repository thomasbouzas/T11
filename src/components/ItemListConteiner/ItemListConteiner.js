import React, {useState} from "react";
import "./itemstyles.css";

// FUNCION CONTADOR
const ItemListConteiner = () => {

          const [count, SetCount] = useState(0)

               const onClick = () => {
    
                     SetCount (count + 1)

          }

          const Onclicktwo = () => {
               if (count > 0) {
                    SetCount (count - 1)
               }
          }         

          const agregarCarro = () => {

               if (count > 0) {
               alert("Se agrego al carrito");
          }
     }

// RETURN CODIGO HTML 
return (
     <>   <div className="parent">

               <div className="div1"> STOCK </div>
                <div className="div2"> STOCK</div>
                <div className="div3"> STOCK</div>

     </div>
          <div className="contador">
              <div className="contadoruno">

                     <button onClick={onClick}> + </button>
                          <span> {count} </span>
                              <button onClick={Onclicktwo}> - </button>

               </div>

               <div className="contradordos">

                     <button onClick={onClick}> + </button>
                          <span> {count} </span>
                               <button onClick={Onclicktwo}> - </button>

               </div>

               <div className="contadortres">
                    <button onClick={onClick}> + </button>
                         <span> {count} </span>
                              <button onClick={Onclicktwo}> - </button>

               </div>

              </div>
              
              
              <div className="buy">

                    <div className="buno"> 

                          <button onClick={agregarCarro}> AGREGAR AL CARRITO </button>

                    </div>

                    <div className="bdos"> 

                         <button onClick={agregarCarro}> AGREGAR AL CARRITO </button>

                    </div>

                    <div className="btres">

                         <button onClick={agregarCarro}> AGREGAR AL CARRITO </button>

                    </div>
                    </div>
              </>
    )
}




export default ItemListConteiner