
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ url }) => {
    const [pokemonData, setPokemonData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (!pokemonData) {
        return <p>Loading...</p>;
    }

    const { name, sprites, types } = pokemonData;

    return (
        <div className="pokemon-card">
            <img src={sprites.front_default} alt={name} />
            <h3>{name}</h3>
            <div className="pokemon-types">
                {types.map((type, index) => (
                    <span key={index} className="type">{type.type.name}</span>
                ))}
                <button>👍</button>
            </div>
        </div>
    );
};

PokemonCard.propTypes = {
    url: PropTypes.string.isRequired,
};

export default PokemonCard;