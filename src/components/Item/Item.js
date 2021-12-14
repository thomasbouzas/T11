import "./Item.css"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({name, url, id}) => {

   console.log(id)
    return (

      <><h3>{name}</h3>
      
      <div class="parent">

        <div class="div1">

          <img src={url} alt={name}/>
          <br></br>
          <ItemCount />
          <Link to={`/detail`}>VER DETALLE</Link>

        </div>


      </div></>
        
    )
}

export default Item
