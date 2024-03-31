import React from 'react';
import ContactForm from '../components/ContactForm';
import Navbar from "../components/Navbar.jsx";
import '../assets/styles_components/PageStructure.css';
const Contacto = () => {
    return (
        <div className="page___main">
            <Navbar className="header___page"/>
            <h1>Formulario de contacto</h1>
            <ContactForm className="page___main"></ContactForm>
        </div>
    );
};

export default Contacto;
