import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard.jsx';


const PokemonList = ({ pokemonArray }) => {
    return (
        <div className="pokemon-list">
            <div className="pokemon-row">
                {pokemonArray.map((pokemon, index) => (
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
