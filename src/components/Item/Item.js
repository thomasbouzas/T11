import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({key, name, precio, url, descripcion}) => {


    return (
      <div className="CardItem">

            <div className="ContainerItem">

               <p className="ItemHeader"> Stock</p>

            </div>

            
        <img src={url} alt={name} className="ItemImg"/>

        <p className="Info">

           Categoria: {descripcion}

        </p>

        <p className="Info">

            Precio: {precio}

        </p>

      
        <button className="Button">Ver detalle</button>
        <ItemCount />

      </div>
    )
}

export default Item
