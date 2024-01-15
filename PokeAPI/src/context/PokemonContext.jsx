import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemonData, setPokemonData] = useState([]);

    return (
        <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
            {children}
        </PokemonContext.Provider>
    )
}

PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default PokemonProvider;
