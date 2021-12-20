import Item from "../Item/Item"

const ItemList = ({productos =[]}) => {  

     return (
        productos.map ((p) => 

       
        <Item 
        id={p.id} productos={p}
        />
        
     )
     )
    }

export default ItemList