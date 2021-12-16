function ListControls() {

  handleSubmit = (e) => {
    e.preventDefault()
    setItem('') 
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type='text' />
      <button>Add Item</button>
    </form>
  );
};

export default ListControls;