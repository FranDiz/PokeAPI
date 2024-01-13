import React, {createContext, useEffect, useState} from "react";

import PropTypes from "prop-types";

export const PokemonContext = createContext();
export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    const [allPokemons, setAllPokemons] = useState([]);
    const [pokemonAmount, setPokemonAmount] = useState(0);

    const getPokemons = async (pokemonAmount) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${pokemonAmount}`);
        const data = await res.json();
        setPokemons(data.results);
        console.log(data.results);
    };
    
    const getPokemon = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        return data
    };


    const getAllPokemons = async () => {

		const res = await fetch(
			`$https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

		setAllPokemons(results);
	};

    const morePokemonAmount = () => {
        setPokemonAmount(pokemonAmount + 50);
    }

    useEffect(() => {
        getPokemons(0);
        getPokemon(1);
    }, []);


    const contextValue = {
        allPokemons,
        pokemons,
        pokemon,
        pokemonAmount,
        morePokemonAmount,
        getAllPokemons,
        getPokemons,
        getPokemon,
    };

    return (
        <PokemonContext.Provider value={{contextValue}}>
            {children}
        </PokemonContext.Provider>
    );
};

PokemonProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
