
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
            console.error('Eror al obtener los datos', error);
        }
    };


    //Agrega un pokemon a favoritos en el local storage
    const addFavourite = () => {
        const updatedSession = { ...session };
        updatedSession.data.favorites.push(id);
        setSession(updatedSession);
        console.log(session)
        saveSession();
    }

    

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (!pokemonData) {
        return <p>Loading...</p>;
    }

    const { name, sprites, types, id } = pokemonData;

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
                <button onClick={addFavourite}>👍</button>
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