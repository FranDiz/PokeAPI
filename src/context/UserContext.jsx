import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(()=>{
        const loggedUser = localStorage.getItem('user');
        return loggedUser ? JSON.parse(loggedUser) : false;
    });
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default UserProvider;
