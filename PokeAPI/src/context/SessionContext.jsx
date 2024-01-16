import React, { createContext, useState } from 'react';

export const SessionContext = createContext();

import PropTypes from 'prop-types';

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    const login = (userData) => {
        setSession(userData);
    };

    const logout = () => {
        setSession(null);
        console.log(session)
    };

    const saveSession = () => {
        const users = Object.values(localStorage);
        for (const user of users) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.username === session.username && parsedUser.password === session.password && parsedUser.email === session.email){
                localStorage.setItem(parsedUser.id, JSON.stringify(session));
                return;
            }
        }
}

    return (
        <SessionContext.Provider value={{login, logout, session, setSession, saveSession}}>
            {children}
        </SessionContext.Provider>
    );
};

SessionProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

   
