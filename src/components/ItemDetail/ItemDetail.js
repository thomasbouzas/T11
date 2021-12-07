import React from "react";
import "./ItemDetail.css"

const ItemDetail = ({name,precio,descripcion}) => {
    return (
        <div className="Detalle">
            <h4> Lata de Coca Cola </h4>

            <p>Nombre</p> <li>{name}</li>

            <p>Precio</p><li>{precio}</li>

            <p>Descripcion del Item</p><li>{descripcion}</li>
            
        </div>
    )
}

export default ItemDetail