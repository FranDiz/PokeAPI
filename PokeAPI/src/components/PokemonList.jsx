import React, {useEffect, useState } from "react";
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard.jsx';
import '../assets/styles_components/PokemonList.css';
const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const getPokemons = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
        const data = await res.json();
        setPokemons(data.results);
    };

    useEffect(() => {
        getPokemons();
    }
    , []);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    const filteredPokemons = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="pokemon-list">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Buscar Pokémon" 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
            </div>
            <div className="pokemon-row">
                {filteredPokemons.map((pokemon, index) => (
                    <div key={index} className="pokemon-card">
                        <PokemonCard url={pokemon.url} />
                    </div>
                ))}
            </div>
        </div>
    );
};

PokemonList.propTypes = {
    pokemonArray: PropTypes.array.isRequired,
};

export default PokemonList;
