import { useState } from "react";

function ListControls({ onAdded }) {
  const[name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    onAdded(name) 
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        value={name}
        aria-label='new item input'
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" aria-label='submit new item'>Add Item</button>
    </form>
  );
};

export default ListControls;