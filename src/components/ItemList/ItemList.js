import Item from "../Item/Item"

const ItemList = ({productos}) => {
     return (
        productos.map ( (p) => 
        
            <Item key={p.id}  name={p.name}  precio={p.precio} url={p.url} descripcion={p.descripcion} />
                                   
     )
     )
    }

export default ItemList