import React from 'react';

const Perfil = () => {
    // Obtener la información del usuario en sesión
    const usuario = {
        nombre: 'John Doe',
        email: 'johndoe@example.com',
        favoritos: ['Pikachu', 'Charizard', 'Bulbasaur']
    };

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
