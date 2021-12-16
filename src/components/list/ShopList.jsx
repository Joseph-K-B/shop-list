import ShopItem from "../item/ShopItem";

function ShopList({items, onUpdate, onDeleteItem}) {
    // console.log('ITEMS', items)
    return(
        <>        
        <ul>
            {!items ? (
                <h1>Add items to your list</h1>
            ) : (
                items.map((item) => (
                    <li key={item.id}>
                        <ShopItem item={item} onChange={onUpdate} onDelete={onDeleteItem}/>
                    </li>
                ))
            )}
        </ul>
        </>
    )
}

export default ShopList;