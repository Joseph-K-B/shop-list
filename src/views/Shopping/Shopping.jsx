import { useReducer } from "react"
import ListControls from "../../components/controls/ListControls";
import ShopList from "../../components/list/ShopList";
import itemReducer from "../../utils/ItemReducer"

const initialState = []

function Shopping() {
    const [items, dispatch] = useReducer(itemReducer, initialState);
    
    const handleAdded = (itemName) => {
      dispatch({
        type: 'added',
        id: items.length + 1,
        itemName,
      });
    }

    return(
      <>
        <h1>Shopping List</h1>
        <ListControls onAdded={handleAdded} />
        <ShopList items={items}/>
      </>
    )
}

export default Shopping