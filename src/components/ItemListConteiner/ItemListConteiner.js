import React, {useState} from "react";
import "./itemstyles.css";
import ItemCount from "./ItemCount";
import Img from "./Img";

// FUNCION CONTADOR
const ItemListConteiner = ({sujeto}) => {


     return (
          
         <><><div className="parent">

               <div className="div1">{sujeto.nombre}</div>
               <div className="div2">{sujeto.nombre2}</div>
               <div className="div3">{sujeto.nombre3}</div>

          </div><div className="parent">

                    <div className="div1"><Img urlImagen={sujeto.urlImagen} /> </div>
                    <div className="div2"><Img urlImagen={sujeto.urlImagen2} /></div>
                    <div className="div3"><Img urlImagen={sujeto.urlImagen3} /></div>

               </div></><ItemCount />  

                         
               </>


     )
}

export default ItemListConteiner