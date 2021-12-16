import { useReducer } from "react"
import ListControls from "../../components/controls/ListControls";
import ShopList from "../../components/list/ShopList";
import itemReducer from "../../utils/ItemReducer"

const initialState = [
  {id: 1, name: 'test', done: false},
  {id: 2, name: 'test-2', done: false},
]

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
        <h1>Shopping List</h1>
        <ListControls onAdded={handleAdded} />
        <ShopList items={items} onUpdate={handleUpdate} onDeleteItem={handleDelete}/>
      </>
    )
}

export default Shopping