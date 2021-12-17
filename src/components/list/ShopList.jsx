import React from 'react';
import { useUser } from '../../context/UserCtx';
import ShopItem from "../item/ShopItem";
import css from './ShopList.css';

function ShopList({items, onUpdate, onDeleteItem}) {
    const {userName} = useUser();
    // console.log('ITEMS', items)
    return(
        <>        
        <h2>{userName}</h2>
        <ul className={css.shopList}>        
            {!items ? (
                <h1>Add items to your list {userName}</h1>
            ) : (
                items.map((item) => (
                    <li key={item.id} className={css.listItem}>                        
                        <ShopItem item={item} onChange={onUpdate} onDelete={onDeleteItem}/>
                    </li>
                ))
            )}
        </ul>
        </>
    )
}

export default ShopList;