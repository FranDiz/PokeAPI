import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchPokemonData();
    }, []);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    const { name, weight, types } = pokemonData;

    return (
        <div>
            <h2>{name}</h2>
            <p>Weight: {weight}</p>
            <p>Types: {types.map((type) => type.type.name).join(', ')}</p>
        </div>
    );
};

export default Pokemon;
