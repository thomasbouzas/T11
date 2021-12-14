import ItemDetail from "../ItemDetail/ItemDetail"


const ItemListDetail = ({item =[]}) => {
   
    return (
      item.map ( (i) =>
        <ItemDetail id={i.id} name={i.name} url={i.url} descripcion={i.descripcion} precio={i.precio}/>
      )
  )
}
   
   
  


   


export default ItemListDetail