import React, { useReducer } from "react";
import AddControls from "../../components/controls/AddControls";
import { LogControls } from "../../components/controls/LogControls";
import ShopList from "../../components/list/ShopList";
import itemReducer from "../../utils/ItemReducer"
import css from './Shopping.css';

const initialState = []

function Shopping() {
    const [items, dispatch] = useReducer(itemReducer, initialState);
    
    const handleAdded = (name) => {
      dispatch({
        type: 'added',
        id: items.length + 1,
        name,
      });
    };

    const handleUpdate = (item) => 
    dispatch({
      type: 'changed',
      item
    });

    const handleDelete = (id) => {
      dispatch({
        type: 'deleted',
        id
      });
    };

    return(
      <>
        <section className={css.shop}>
          <div className={css.add}>
            <LogControls />
            <AddControls onAdded={handleAdded} />
          </div>
          <div>
          <ShopList items={items} onUpdate={handleUpdate} onDeleteItem={handleDelete}/>          
          </div>
        </section>
      </>
    )
}

export default Shopping