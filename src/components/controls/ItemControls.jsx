import { useState } from "react";

function ItemControls({item, onChange, onDelete}) {
    const[displayUpdate, setDisplayUpdate] = useState(false)

    return (
        <>
        <button type='button' onClick={() => onDelete(item.id)}>Remove</button>
        {displayUpdate ? (
            <>
                <input 
                    type='text'
                    value={item.name} 
                    aria-label='update item input' 
                    onChange={(e) => {
                        onChange({
                            ...item,
                            name: e.target.value
                        })
                    }}/>
                <button onClick={() => setDisplayUpdate(false)} aria-label={`update ${item}`}>Update</button>
            </>
        ) : (            
            <button onClick={() => setDisplayUpdate(true)}>Edit</button>
        )}
        </>
    )
}

export default ItemControls;