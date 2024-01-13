import React from 'react';

import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>Type: {pokemon.type}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
};

export default PokemonCard;
