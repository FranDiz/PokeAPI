import React, { useState } from 'react';
import '../assets/styles_components/FormComponent.css';

const ContactForm = () => {
    const [categoria, setCategoria] = useState('');
    const [asunto, setAsunto] = useState('');
    const [correo, setCorreo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [errorCorreo, setErrorCorreo] = useState(false);
    const [errorAsunto, setErrorAsunto] = useState(false);
    const [errorDescripcion, setErrorDescripcion] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleAsuntoChange = (event) => {
        setAsunto(event.target.value);
        if (event.target.value.trim() === '') setErrorAsunto(true);
        else setErrorAsunto(false);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
        if (!validateEmail(event.target.value)) setErrorCorreo(true);
        else setErrorCorreo(false);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
        if (event.target.value.trim() === '') setErrorDescripcion(true);
        else setErrorDescripcion(false);
    };

    const onBlurCorreo = () => {
        if (!validateEmail(correo)) setErrorCorreo(true);
    };

    const onBlurAsunto = () => {
        if (asunto.trim() === '') setErrorAsunto(true);
    };

    const onBlurDescripcion = () => {
        if (descripcion.trim() === '') setErrorDescripcion(true);
    };

    const isFormValid = () => {
        return validateEmail(correo) && asunto && descripcion;
    };

    return (
        <form className="form-container">
            <label htmlFor="categoria">Categoría:
                <select id="categoria" value={categoria} onChange={handleCategoriaChange}>
                    <option value="Problemas técnicos">Problemas técnicos</option>
                    <option value="Problemas con el registro">Problemas con el registro</option>
                    <option value="Dudas sobre pokemons">Dudas sobre pokemons</option>
                </select>
            </label>

            <label htmlFor="asunto">Asunto:
                <input type="text" id="asunto" value={asunto} onChange={handleAsuntoChange} onBlur={onBlurAsunto} />
                {errorAsunto && <p className="error">Por favor, introduce un asunto.</p>}
            </label>

            <label htmlFor="correo">Correo:
                <input type="email" id="correo" value={correo} onChange={handleCorreoChange} onBlur={onBlurCorreo} />
                {errorCorreo && <p className="error">Por favor, introduce un correo electrónico válido.</p>}
            </label>
            
            <label htmlFor="descripcion">Descripción:
                <textarea id="descripcion" value={descripcion} onChange={handleDescripcionChange} onBlur={onBlurDescripcion} />
                {errorDescripcion && <p className="error">Por favor, introduce una descripción.</p>}
            </label>

            <button type="submit" disabled={!isFormValid()}>Enviar</button>
        </form>
    );
};

export default ContactForm;
