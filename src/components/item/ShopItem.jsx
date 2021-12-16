import EditControls from "../controls/EditControls";

function ShopItem({item, onChange, onDelete}) {

  return(
    <>
      <h3>{item.name}</h3>
      <EditControls item={item} onChange={onChange} onDelete={onDelete}/>     
    </>
  )
}

export default ShopItem;