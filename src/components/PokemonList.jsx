import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard.jsx';
import '../assets/styles_components/PokemonList.css';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('all');
    const [types, setTypes] = useState([]);
    const [visibleLimit, setVisibleLimit] = useState(100); // Nuevo estado para controlar el límite visible de Pokémon

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => setTypes(data.results));
    }, []);

    const getPokemons = async (type = 'all') => {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=10000';
        if (type !== 'all') {
            url = `https://pokeapi.co/api/v2/type/${type}`;
        }
        
        const res = await fetch(url);
        const data = await res.json();
        const pokemonList = type === 'all' ? data.results : data.pokemon.map(p => p.pokemon);
        setPokemons(pokemonList);
    };

    useEffect(() => {
        getPokemons(type);
    }, [type]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleLoadMore = () => {
        setVisibleLimit(prevLimit => prevLimit + 100); // Aumenta el límite visible
    };

    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, visibleLimit);

    return (
        <div className="pokemon-list">
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Buscar Pokémon" 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
                <select className="pokemon-type" onChange={handleTypeChange} value={type}>
                    <option value="all">Todos los tipos</option>
                    {types.map((type, index) => (
                        <option key={index} value={type.name}>{type.name}</option>
                    ))}
                </select>
            </div>
            <div className="pokemon-row">
                {filteredPokemons.map((pokemon, index) => (
                    <div key={index} className="pokemon-card">
                        <PokemonCard url={pokemon.url} />
                    </div>
                ))}
            </div>
            {filteredPokemons.length < pokemons.length && (
                <button onClick={handleLoadMore}>Cargar más</button> // Solo muestra el botón si aún hay más Pokémon por cargar
            )}
        </div>
    );
};

PokemonList.propTypes = {};

export default PokemonList;
