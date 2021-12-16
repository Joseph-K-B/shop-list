import React, { useState } from "react";

function EditControls({item, onChange, onDelete}) {
    const[displayUpdate, setDisplayUpdate] = useState(false)
    return (
        <>
        <input 
            type='checkbox' 
            value={item.done} 
            onChange={(e) => 
                {onChange({...item, done: e.target.checked})
            }}
        />
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

export default EditControls;