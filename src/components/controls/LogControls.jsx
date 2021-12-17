import React, { useState } from 'react';
import { useUser } from '../../context/UserCtx';

const LogControls = () => {
    const [name, setName] = useState('');
    const {userName, setUserName} = useUser();

    const newUser = () => {
        setUserName(name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newUser();
    };

    const nameSubmit = (
        <div>
            <input 
                type='text'
                placeholder='name'
                aria-label='name-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type='submit' aria-label='log-button'>Log</button>
        </div>
    );
   

    const loggedMsg = userName ? `List for ${userName}` : 'Sign in to create list';

    return (
        <>
            <section>
                <h3>{loggedMsg}</h3>
                <form onSubmit={handleSubmit}>
                    {userName ? null : nameSubmit}                    
                    {userName && (
                        <button
                            onClick={() => {
                                setName('')
                                setUserName('')
                            }}
                        >
                            Not {userName}?
                        </button>
                    )}
                </form>
            </section>
        </>
    )
}

export { LogControls }