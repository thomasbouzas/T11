import React from "react";
import { useState, useEffect } from 'react'
import { newProducts } from "../../products";
import ItemList from "../ItemList/ItemList";


const ItemListConteiner = () => {
          const [productos, setProducto] = useState ([])

          useEffect (() => {
          const list = newProducts ()
               list.then(list => {
                    setProducto(list)
               })

               return (() => {
                    setProducto([])
               })
           
     }, [])


     return (
          <div className="ItemListConteiner">
               <ItemList productos={productos}/>
          </div>
     )

}



export default ItemListConteiner