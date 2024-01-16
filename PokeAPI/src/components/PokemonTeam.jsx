
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext';





const PokemonTeam = ({ url }) => {
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

    const deleteTeam = () => {
        const index = session.data.team.indexOf(id);
        if (index !== -1) {
            session.data.team.splice(index, 1);
        }
        saveSession();
    }

    

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (!pokemonData) {
        return <p>Cargando...</p>;
    }

    const { name, sprites, types, id, abilities } = pokemonData;

    return (
        <div>
            <img src={sprites.front_default} alt={name} />
            <div>
                <p>{name}</p>
            </div>
            <p>Habilidades: {abilities.map(ability => ability.ability.name).join(', ')}</p>
            <div className="pokemon-types">
                {types.map((type, index) => (
                    <span key={index} className={type.type.name}>{type.type.name}</span>
                ))}
                
                <NavLink to={`/pokemon/${id}`}>Ver detalles</NavLink>
            </div>
            <button onClick={deleteTeam}>Eliminar del equipo</button>
        </div>
    );
};

PokemonTeam.propTypes = {
    url: PropTypes.string.isRequired,
};

export default PokemonTeam;