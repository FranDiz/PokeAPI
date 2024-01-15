import React, { useEffect, useState } from 'react';

const PokemonData = () => {
    const [pokemon, setPokemon] = useState(null);
    const getPokemon = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
    }
    useEffect(() => {
        getPokemon(1);
    }, []);
 

    return (
        <div>
            {pokemon ? (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <p>Experiencia base: {pokemon.base_experience}</p>
                    <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                    <div className="pokemon-types">
                {pokemon.types.map((type, index) => (
                    <span key={index} className={type.type.name}>{type.type.name}</span>
                ))}
            </div>
                        
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PokemonData;
