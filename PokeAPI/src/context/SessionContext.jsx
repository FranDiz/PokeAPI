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
    };

    const contextValue = {
        session,
        login,
        logout,
    };

    return (
        <SessionContext.Provider value={{contextValue}}>
            {children}
        </SessionContext.Provider>
    );
};

SessionProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

   
