
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';



//Componente para mostrar los datos de un pokemon desde favoritos

const PokemonFavorite = ({ url }) => {
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
    //Elimina un pokemon de favoritos
    const deleteFavourite = () => {
        const index = session.data.favorites.indexOf(id);
        if (index !== -1) {
            session.data.favorites.splice(index, 1);
        }
        saveSession();
    }

    //Agrega un pokemon al equipo
    const addTeam = () => {
        if (session.data.team.includes(id) || session.data.team.length >= 6) {
            return;
        }
        session.data.team.push(id);
        saveSession();
    }

    

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (!pokemonData) {
        return <p>Cargando...</p>;
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
                
                <button onClick={deleteFavourite}>👎</button>
            </div>
            <div>
                <button onClick={addTeam}>Añadir al equipo</button>
            </div>
        </div>
    );
};

PokemonFavorite.propTypes = {
    url: PropTypes.string.isRequired,
};

export default PokemonFavorite;