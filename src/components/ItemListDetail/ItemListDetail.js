import ItemDetail from "../ItemDetail/ItemDetail"


const ItemListDetail = ({item = []}) => {

   console.log(item)

    return (
      item.map ( (i) =>
        <ItemDetail id={i.id} item={i}/>
      )
  )
}
   
   
  


   


export default ItemListDetail