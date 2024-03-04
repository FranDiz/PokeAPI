import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../context/SessionContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import { useContext } from 'react';
import '../assets/styles_components/FormComponent.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState(null);
    const [errors, setErrors] = useState({});
    const [userAdded, setUserAdded] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const {login} = useContext(SessionContext);
    const navigate = useNavigate();

    const validateUsername = () => {
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(username)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Nombre entre 3-20 caracteres, contiene letras y números',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: '',
            }));
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Contraseña mínimo 8 caracteres, debe tener una minúscula, una mayúscula y un número',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: '',
            }));
        }
    };

    const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: 'Las contraseñas no coinciden',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: '',
            }));
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Dirección de email inválida',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
        }
    };

    const validateDate = () => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                date: 'Formato de fecha inválido.',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                date: '',
            }));
        }
    };

    const validateGender = () => {
        if (gender === null) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                gender: 'Selecciona género',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                gender: '',
            }));
        }
    };

    const validateForm = () => {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        validateDate();
        validateGender();

        return Object.keys(errors).length === 0;
    };

    const checkExistingUser = (username, password, email) => {
        const users = Object.values(localStorage);
        for (const user of users) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.username === username && parsedUser.password === password && parsedUser.email === email) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    user: 'Ya existe este usuario',
                }));
                return false; // Usuario encontrado
            }
        }
        return true; // Usuario no encontrado
    };

    const generateId = () => {
        const currentDate = new Date();
        const id = currentDate.getTime().toString();
        return id;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserAdded(false);
        console.log(username)
    
        if (!validateForm() && checkExistingUser(username, password, email)) {
            const user = {
                username: username,
                password: password,
                email: email,
                date: date,
                gender: gender,
                data: {
                    favorites: [],
                    team: [],
                },
            };
            localStorage.setItem(generateId(), JSON.stringify(user));
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
            setDate('');
            setUserAdded(true);
            setGender(null);
            setUser(true);
            login(user);
            navigate("/pokemons");
        }
    };
    const isFormValid = Object.values(errors).every((error) => error === '');

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={validateUsername} />
            </label>
            {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}

            <label>
                Contraseña:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
            </label>
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

            <label>
                Repite la contraseña:
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={validateConfirmPassword}
                />
            </label>
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}

            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
            </label>
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

            <label>
                Fecha de nacimiento:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} onBlur={validateDate} />
            </label>
            {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}

            <fieldset>
                <legend>Género:</legend>
                <label>
                    Masculino
                    <input
                        type="radio"
                        value="Masculino"
                        checked={gender === true}
                        onChange={() => setGender(true)}
                        onBlur={validateGender}
                    />
                </label>
                <label>
                    Femenino
                    <input
                        type="radio"
                        value="Femenino"
                        checked={gender === false}
                        onChange={() => setGender(false)}
                        onBlur={validateGender}
                    />
                </label>
            </fieldset>
            {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}

            <button type="submit" disabled={!isFormValid} onClick={handleSubmit}>
                Registrarse
            </button>
            {errors.user && <span style={{ color: 'red' }}>{errors.user}</span>}
        </form>
    );
};

export default RegisterForm;