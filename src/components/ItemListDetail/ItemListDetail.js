import ItemDetail from "../ItemDetail/ItemDetail"


const ItemListDetail = ({item}) => {
     return (
        item.map ( (i) => 
        
            <ItemDetail key={i.id}  name={i.name}  precio={i.precio} url={i.url} descripcion={i.descripcion} />
                                   
     )
     )
    }

export default ItemListDetail