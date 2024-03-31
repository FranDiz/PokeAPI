import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from "../components/Navbar.jsx";
import '../assets/styles_components/PageStructure.css';
const LogIn = () => {
    return (
        <div className='page___main'>
            <Navbar className="header___page"/>
            <h1>Iniciar Sesión</h1>
            <LoginForm  className='page___main'/>
        </div>
    );
}; 
export default LogIn;