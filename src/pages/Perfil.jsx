import React from 'react';
import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import PokemonTeam from '../components/PokemonTeam.jsx';
import PokemonFavorite from '../components/PokemonFavorite.jsx';
import '../assets/styles_components/PokemonFavorites.css';
import Navbar from "../components/Navbar.jsx";


const Perfil = () => {
    const { session } = useContext(SessionContext);

    return (
        <div className='page___main'>
            <Navbar className="header___page"/>
            <h1>Perfil de {session.username}</h1>
            <h2>Equipo Pokemon:</h2>
            <div className='pokemon-team'>
                {session.data.team.map((pokemon, index) => (
                    <PokemonTeam key={index} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} />
                ))}
            </div>
            <h2>Pokemons favoritos:</h2>
            <div className='pokemon-favorites'>
                {session.data.favorites.map((pokemon, index) => (
                    <PokemonFavorite  key={index} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} />
                ))}
            </div>
        </div>
    );
};

export default Perfil;
