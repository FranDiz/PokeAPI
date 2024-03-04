import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard.jsx';    
const PokemonList = (cd) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonAmount, setPokemonAmount] = useState(0);
    const getPokemons = async (pokemonAmount) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${pokemonAmount}`);
        const data = await res.json();
        setPokemons((prevPokemons) => [...prevPokemons, ...data.results]);
    };

    const morePokemonAmount = () => {
        setPokemonAmount(pokemonAmount + 50);
    }

    useEffect(() => {   
        getPokemons(pokemonAmount);
    }, [pokemonAmount]);



    return (
        <div className="pokemon-list">
            <div className="pokemon-row">
                {pokemons.map((pokemon, index) => (
                    <div key={index} className="pokemon-card">
                        <PokemonCard url={pokemon.url} />
                    </div>
                ))}
            </div>
            <button onClick={morePokemonAmount}>Cargar más</button>
        </div>
    );
};

PokemonList.propTypes = {
    pokemonArray: PropTypes.array.isRequired,
};

export default PokemonList;
