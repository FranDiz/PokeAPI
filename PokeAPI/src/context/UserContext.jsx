import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the UserContext
export const UserContext = createContext();

// Create a UserProvider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false);

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
