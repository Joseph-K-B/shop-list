import React, { useState } from "react";
import { useUser } from "../../context/UserCtx";

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
        <button type="submit" aria-label='submit new item'>Add Item</button>
        </form>
        ) : ( 
        <p>Start shopping</p>
    )}
    </>
  );
};

export default AddControls;