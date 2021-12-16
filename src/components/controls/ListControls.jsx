import { useState } from "react";

function ListControls({ onAdded }) {
  const[itemName, setItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setItemName('')
    onAdded(itemName) 
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        value={itemName}
        aria-label='new item input'
        onChange={(e) => setItemName(e.target.value)}
      />
      <button type="submit" aria-label='submit new item'>Add Item</button>
    </form>
  );
};

export default ListControls;