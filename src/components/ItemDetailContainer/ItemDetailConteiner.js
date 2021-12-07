import React from "react";
import { useState, useEffect } from 'react'
import { getItem } from "../../products";
import ItemListDetail from "../ItemListDetail/ItemListDetail";




const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect (() => {
        const lista = getItem ()
             lista.then(lista => {
                  setItem(lista)
             })

             return (() => {
                  setItem([])
             })
   }, [])

   return (

    <div className="ItemDetailContainer">

        <ItemListDetail item={item}/>

        </div>
   )
}

export default ItemDetailContainer