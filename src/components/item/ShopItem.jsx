import React from 'react';
import { useUser } from '../../context/UserCtx';
import EditControls from "../controls/EditControls";
import css from '../list/ShopList.css';

function ShopItem({item, onChange, onDelete}) {
  
  return(
    <>
    <section aria-label='list-item'>
      <div className={css.itemInfo}>
      {item.done === true ? (
        <h1 className={css.strike}>{item.name}</h1>
      ) : (
        <h3>{item.name}</h3> 
      )}
      </div>
      <div className={css.itemControls}>
        <EditControls 
          item={item} 
          onChange={onChange} 
          onDelete={onDelete}
        />     
      </div>
    </section>
    </>
  )
}

export default ShopItem;