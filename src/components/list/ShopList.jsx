import ShopItem from "../item/ShopItem";

function ShopList({items}) {    
    console.log(items)
    return(
        <>        
        <ul>
            {!items ? (
                <h1>Add items to your list</h1>
            ) : (
                items.map((item) => (
                    <li key={item.id}>
                        <ShopItem item={item}/>
                    </li>
                ))
            )}
        </ul>
        </>
    )
}

export default ShopList;