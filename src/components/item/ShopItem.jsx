import ItemControls from "../controls/ItemControls";

function ShopItem({item, onChange, onDelete}) {

  return(
    <>
      <h3>{item.name}</h3>
      <ItemControls item={item} onChange={onChange} onDelete={onDelete}/>     
    </>
  )
}

export default ShopItem;