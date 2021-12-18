import React, { useState } from "react";
import css from '../list/ShopList.css'

function EditControls({item, onChange, onDelete}) {
    const[displayUpdate, setDisplayUpdate] = useState(false);

    return (
        <>
        <div>
            <input 
                type='checkbox'
                className={css.check} 
                value={item.done} 
                onChange={(e) => 
                    {onChange({...item, done: e.target.checked})
                }}
            />
        </div>
        <div>
            <button 
                type='button' 
                aria-label='open delete form' 
                onClick={() => onDelete(item.id)}
            >
                Remove
            </button>
        </div>
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
                <button onClick={() => setDisplayUpdate(false)} aria-label='apply update'>Update</button>
            </>
        ) : (            
            <button aria-label='open update form' onClick={() => setDisplayUpdate(true)}>Edit</button>
        )}
        </>
    )
}

export default EditControls;