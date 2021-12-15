import Item from "../Item/Item"

const ItemList = ({productos =[]}) => {  

    
     return (
        productos.map ((p) => 

       
        <Item 
        id={p.id} name={p.name} url={p.url} descripcion={p.descripcion} precio={p.precio}
        />
        
     )
     )
    }

export default ItemList