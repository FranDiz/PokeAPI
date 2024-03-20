
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';

const PokemonCard = ({ url }) => {
    const [pokemonData, setPokemonData] = useState(null);
    const { session, setSession, saveSession } = useContext(SessionContext);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error('Error al obtener los datos', error);
        }
    };

    const addFavourite = () => {
        const updatedSession = { ...session };
        const favorites = updatedSession.data.favorites;
        const id = pokemonData.id;

        if (favorites.includes(id)) {
            // Pokemon is already a favorite, remove it
            const index = favorites.indexOf(id);
            favorites.splice(index, 1);
        } else {
            // Pokemon is not a favorite, add it
            favorites.push(id);
        }

        setSession(updatedSession);
        saveSession();
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (!pokemonData) {
        return <p>Loading...</p>;
    }

    const { name, sprites, types, id } = pokemonData;
    const isFavorite = session.data.favorites.includes(id);

    return (
        <div className="pokemon-card">
            <img src={sprites.front_default} alt={name} />
            <div>
                <h3>{name}</h3>
                <h3>{id}</h3>
            </div>
            
            <div className="pokemon-types">
                {types.map((type, index) => (
                    <span key={index} className={type.type.name}>{type.type.name}</span>
                ))}
                <button onClick={addFavourite}>
                    {isFavorite ? 'Eliminar favorito' : 'Añadir favorito'}
                </button>
            </div>
            <div>
                <NavLink to={`/pokemon/${id}`}>Ver detalles</NavLink>
            </div>
        </div>
    );
};

PokemonCard.propTypes = {
    url: PropTypes.string.isRequired,
};

export default PokemonCard;