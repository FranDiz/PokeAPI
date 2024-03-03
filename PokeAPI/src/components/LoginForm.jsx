import React, { useState } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { SessionContext } from '../context/SessionContext.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles_components/FormComponent.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const { user, setUser } = useContext(UserContext);
    const {login} = useContext(SessionContext);
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const users = Object.values(localStorage);
        for (const user of users) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.username === username && parsedUser.password === password && parsedUser.email === email)  {
                setUser(true);
                login(parsedUser);
                navigate("/pokemons");
                return;
            }
        }
        setErrors({ LogIn: "Usuario no encontrado" });
    }

    return (
        <div>
            <form className="form-container"onSubmit={handleSubmit}>
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
                <button type="submit" onSubmit={handleSubmit}>Entrar</button>
                {errors.LogIn && <span style={{ color: 'red' }}>{errors.LogIn}</span>}
            </form>
        </div>
    );
};

export default LoginForm;
