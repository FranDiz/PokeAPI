import React, { useState } from 'react';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [errors, setErrors] = useState({});
    const [userAdded, setUserAdded] = useState(false);

    const validateForm = () => {
        let errors = {};

        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if (!usernameRegex.test(username)) {
            errors.username = 'Username must be between 3 and 20 characters and can only contain letters, numbers, and underscores';
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            errors.password = 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit';
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Invalid email address';
        }

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            errors.date = 'Invalid date format. Please use YYYY-MM-DD';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const checkExistingUser = (username, password) => {
        const users = Object.values(localStorage);
        for (const user of users) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.username === username && parsedUser.password === password && parsedUser.email === email)  {
                errors.user = "User already exists"
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
        setUserAdded(false);

        if (validateForm() && checkExistingUser(username, password, email)) {
            const user = {
                "username":username,
                "password":password,
                "email":email,
                "date":date,
                "data": "[]"
            };
            localStorage.setItem(generateId(), JSON.stringify(user));

            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
            setDate('');
            setUserAdded(true);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                <div>
                    <label>Confirm Password:</label>
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
                    <label>Date:</label>
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
                <button type="submit">Register</button>
                {userAdded && <span style={{ color: 'green' }}>User added</span>}
                {errors.user && <span style={{ color: 'red' }}>{errors.user}</span>}
            </form>
        </div>
    );

};

export default SignIn;
