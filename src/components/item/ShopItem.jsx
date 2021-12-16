import ItemControls from "../controls/ItemControls";

function ShopItem() {

  const handleAddItem = () => {
    dispatchEvent({
      type:'add'
    })
  }

  return(
    <>
      <h3>Item</h3>
      <p>Department</p>
      <p>Amount</p>
      <ItemControls />
    </>
  )
}

export default ShopItem;