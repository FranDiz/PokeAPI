import React, { useState } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const userLogIn = () => {
        const users = Object.values(localStorage);
        for (const user of users) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.username === username && parsedUser.password === password && parsedUser.email === email)  {
                navigate("/pokemons");
                return true;
            }
        }
        return false; // Usuario no encontrado
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userLogIn());
    }

    return (
        <div>
            <h1>IniciarSesión</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <button type="submit">LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;
