import React, { useState } from "react";
import { useUser } from "../../context/UserCtx";
import css from '../list/ShopList.css'

function AddControls({ onAdded }) {
  const {userName} = useUser();
  const[name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    onAdded(name) 
  }

  return(
    <>
    {userName ? (
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          value={name}
          aria-label='new item input'
          onChange={(e) => setName(e.target.value)}
        />
          <button 
            type="submit"
            className={css.addBtn} 
            aria-label='submit new item'
          >
            Add Item
          </button>
        </form>
        ) : ( 
        <p>Start shopping</p>
    )}
    </>
  );
};

export default AddControls;