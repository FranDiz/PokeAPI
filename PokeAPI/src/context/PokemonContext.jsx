import React, {createContext, useState} from "react";

export const PokemonContext = createContext();

import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState(null);

    const getAllPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        setPokemons(data.results);
    };

    const getPokemon = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
    };

    const contextValue = {
        pokemons,
        pokemon,
        getAllPokemons,
        getPokemon,
    };

    return (
        <PokemonContext.Provider value={contextValue}>
            {children}
        </PokemonContext.Provider>
    );
};

PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
