import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState(null);
    const [errors, setErrors] = useState({});
    const [userAdded, setUserAdded] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        let errors = {};

        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(username)) {
            errors.username = 'Nombre entre 3-20 carácteres, contiene letras y números';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            errors.password = 'Contrasña mínimo 8 carácteres, debe tener una minúscula, una mayúscula y un número';
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = 'Las contraseñas no coinciden';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Dirección de email inválida';
        }

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            errors.date = 'Formato de fecha inválido.';
        }
        if (gender==null){
            errors.gender = 'Selecciona género'
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const checkExistingUser = (username, password) => {
        const users = Object.values(localStorage);
        for (const user of users) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.username === username && parsedUser.password === password && parsedUser.email === email)  {
                errors.user = "Ya existe este usuario"
                setErrors(errors);
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
        console.log(date)
        setUserAdded(false);

        if (validateForm() && checkExistingUser(username, password, email)) {
            const user = {
                "username":username,
                "password":password,
                "email":email,
                "date":date,
                "gender":gender,
                "data": "{}"
            };
            localStorage.setItem(generateId(), JSON.stringify(user));

            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
            setDate('');
            setUserAdded(true);
            setGender(null)
            navigate('/login');
        }
    };

    return (
        <div>
            <h2>Crear cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                <div>
                    <label>Repite la contraseña:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <div>
                    <label>Fecha de nacimiento:</label>
                    <input
                        type="date" // Cambio el tipo de entrada a "date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <fieldset>
                        <legend>Género:</legend>
                        <label>
                            Masculino
                            <input
                                type="radio"
                                value="Masculino"
                                checked={gender === true}
                                onChange={() => setGender(true)}
                            />
                        </label>
                        <label>
                            Femenino
                            <input
                                type="radio"
                                value="Femenino"
                                checked={gender === false}
                                onChange={() => setGender(false)}
                            />
                        </label>
                    </fieldset>
                    {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
                </div>
                {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
                <button type="submit">Registrarse</button>
                {userAdded && <span style={{ color: 'green' }}>User added</span>}
                {errors.user && <span style={{ color: 'red' }}>{errors.user}</span>}
            </form>
        </div>
    );

};

export default SignIn;
