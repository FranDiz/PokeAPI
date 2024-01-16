import React from 'react';
import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import PokemonTeam from '../components/PokemonTeam.jsx';
import PokemonFavorite from '../components/PokemonFavorite.jsx';


const Perfil = () => {
    const { session } = useContext(SessionContext);

    return (
        <div>
            <h1>Perfil de {session.username}</h1>
            <div>
                <h2>Equipo Pokemon:</h2>
                {session.data.team.map((pokemon, index) => (
                    <PokemonTeam key={index} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} />
                ))}
            </div>
            <div>
                <h2>Pokemons favoritos:</h2>
                {session.data.favorites.map((pokemon, index) => (
                    <PokemonFavorite key={index} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} />
                ))}
            </div>
        </div>
    );
};

export default Perfil;
