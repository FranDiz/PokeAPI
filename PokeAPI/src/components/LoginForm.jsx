import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { SessionContext } from '../context/SessionContext.jsx';
import { useNavigate } from 'react-router-dom';
import '../assets/styles_components/FormComponent.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { setUser } = useContext(UserContext);
    const { login } = useContext(SessionContext);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!username.trim()) {
            errors.username = 'El nombre de usuario es requerido';
            formIsValid = false;
        }

        if (!password.trim()) {
            errors.password = 'La contraseña es requerida';
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const users = Object.values(localStorage);
        for (const user of users) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.username === username && parsedUser.password === password) {
                setUser(true);
                login(parsedUser);
                navigate("/pokemons");
                return;
            }
        }
        setErrors({ LogIn: "Usuario no encontrado" });
    };

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                    {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                </label>
                <br />
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </label>
                <br />
                <button type="submit">Entrar</button>
                {errors.LogIn && <span style={{ color: 'red' }}>{errors.LogIn}</span>}
            </form>
        </div>
    );
};

export default LoginForm;
