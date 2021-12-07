import "./Item.css"

const Item = ({name, url }) => {


    return (
      <><div className="CardItem">

        <img src={url} alt={name} className="ItemImg" />

      </div><button>Ver detalle</button></>
    )
}

export default Item
