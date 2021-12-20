import "./Item.css"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { TestContext } from "../Context/cartContext"


const Item = ({productos}) => {

  
    
    return (

      
      <><h3>{productos.name}</h3>
      
      <div class="parent" >

        <div class="div1">

          <img src={productos.url} alt={productos.name}/>
          <br></br>
    
          <Link to={`/detail/${productos.id}`}>VER DETALLE</Link>

        </div>
        
          
        
      </div></>
        
    )
    }

export default Item
