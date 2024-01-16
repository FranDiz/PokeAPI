import React from 'react';
import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext.jsx';
import { UserContext } from '../context/UserContext.jsx';

const Perfil = () => {
    // Obtener la información del usuario en sesi
    return (
        <div>
            <h1>Perfil de {usuario.nombre}</h1>
            <p>Email: {usuario.email}</p>

            <h2>Favoritos</h2>
            <ul>
                {usuario.favoritos.map((pokemon, index) => (
                    <li key={index}>{pokemon}</li>
                ))}
            </ul>
        </div>
    );
};

export default Perfil;
