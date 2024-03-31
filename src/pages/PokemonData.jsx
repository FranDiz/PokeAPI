import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";

//Muestra de forma detallada los datos de un pokemon

const PokemonData = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
    }

    useEffect(() => {
        getPokemon();
    }, [id]);

    return (
        <div className='page___main'>
            <Navbar className="header___page"/>
            {pokemon ? (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                    <p>Experiencia base: {pokemon.base_experience}</p>
                    <p>Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                    <div className="pokemon-types">
                {pokemon.types.map((type, index) => (
                    <span key={index} className={type.type.name}>{type.type.name}</span>
                ))}
            </div>
                        
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default PokemonData;
