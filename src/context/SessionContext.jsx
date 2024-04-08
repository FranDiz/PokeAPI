import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
export const SessionContext = createContext();

import PropTypes from 'prop-types';

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const { setUser } = useContext(UserContext);


    const login = (userData) => {
        setSession(userData);
    };

    const logout = () => {
        setSession(null);
        console.log(session)
    };

    const saveSession = () => {
        const entries = Object.entries(localStorage);
        for (const [key, value] of entries) {
            const parsedUser = JSON.parse(value);
            if (parsedUser.username === session.username && parsedUser.password === session.password && parsedUser.email === session.email) {
                localStorage.setItem(key, JSON.stringify(session));
                return;
            }
        }
    }
    useEffect(() => {
        const loggedUser = localStorage.getItem('currentUserKey');
        if (loggedUser !== 'none') {
            const userValue = localStorage.getItem(loggedUser);
            const parsedUser = JSON.parse(userValue);
            login(parsedUser);
            console.log(session);
            setUser(true)
        }else{
            setUser(false)
        }
    }, [console.log(session)]   ); // El segundo argumento es un array vacío
    
    

    return (
        <SessionContext.Provider value={{login, logout, session, setSession, saveSession}}>
            {children}
        </SessionContext.Provider>
    );
};

SessionProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

   
