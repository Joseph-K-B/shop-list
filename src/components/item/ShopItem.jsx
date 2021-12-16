import ItemControls from "../controls/ItemControls";

function ShopItem({item, onChange}) {

  return(
    <>
      <h3>{item.name}</h3>
      <ItemControls item={item} onChange={onChange}/>     
    </>
  )
}

export default ShopItem;