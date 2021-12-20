import { useParams } from "react-router-dom"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import React, {useState} from "react";


const ItemDetail = ({item}) => {

 

  const addToCart = (AA) => {
    console.log(`${AA}`)

  } 
 
  return (  
<div className="CardItem">
    <ul>
      <h4>Producto {item.name} </h4>
      <img src={item.url}/>
      <p> Precio: {item.precio} </p>
      <p> Informacion del producto: {item.descripcion} </p>
      <ItemCount onConfirm={addToCart} />
      </ul>
</div>
  )
}

export default ItemDetail
