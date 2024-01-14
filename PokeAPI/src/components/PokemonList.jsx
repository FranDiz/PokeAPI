import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard.jsx';


const PokemonList = ({ pokemonArray }) => {
    return (
        <div className="pokemon-list"> {/* Apply a CSS class for the container */}
            <div className="pokemon-row"> {/* Apply a CSS class for each row */}
                {pokemonArray.map((pokemon, index) => (
                    <div key={index} className="pokemon-card"> {/* Apply a CSS class for each pokemon */}
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
