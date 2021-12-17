import React from 'react';
import EditControls from "../controls/EditControls";

function ShopItem({item, onChange, onDelete}) {

  return(
    <>
    <section aria-label='list-item'>
      <h3>{item.name}</h3>
      <EditControls item={item} onChange={onChange} onDelete={onDelete}/>     
    </section>
    </>
  )
}

export default ShopItem;