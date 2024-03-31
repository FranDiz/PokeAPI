import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Navbar from "../components/Navbar.jsx";
import '../assets/styles_components/PageStructure.css';


const SignIn = () => {
    return (
        <div className='page___main'>
            <Navbar className="header___page"/>
            <h1>Registrarse</h1>
            <RegisterForm className='page___main'/>
        </div>
    );
};
export default SignIn;
