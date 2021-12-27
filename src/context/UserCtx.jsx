import React, { useContext, createContext, useState } from 'react';

const UserCtx = createContext();

const UserProvider = ({children}) => {
    const [userName, setUserName] = useState('');

    return <UserCtx.Provider value={{ userName, setUserName }}>{children}</UserCtx.Provider>
};

const useUser = () => {
    const ctx = useContext(UserCtx);

    if(ctx === undefined) {
        throw new Error('useUser must be called within child components')
    };
    return ctx;
};

export {UserProvider, useUser}