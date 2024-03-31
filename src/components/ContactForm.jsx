import React, { useState } from 'react';
import '../assets/styles_components/FormComponent.css';


//Inputs reactivos
const ContactForm = () => {
    const [categoria, setCategoria] = useState('');
    const [asunto, setAsunto] = useState('');
    const [correo, setCorreo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleAsuntoChange = (event) => {
        setAsunto(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    };

    const isFormValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return correo.match(emailRegex) && asunto && descripcion;
    };


//Contenido HTML devuelto
    return (
        <form className="form-container">
                <label htmlFor="categoria">Categoría:
                <select id="categoria" value={categoria} onChange={handleCategoriaChange}>
                    <option value="">Selecciona una categoría</option>
                    <option value="Problemas técnicos">Problemas técnicos</option>
                    <option value="Problemas con el registro">Problemas con el registro</option>
                    <option value="Dudas sobre pokemons">Dudas sobre pokemons</option>
                </select>
                </label>

                <label htmlFor="asunto">Asunto:
                <input type="text" id="asunto" value={asunto} onChange={handleAsuntoChange} />
                </label>

                <label htmlFor="correo">Correo:
                <input type="email" id="correo" value={correo} onChange={handleCorreoChange} />
                </label>
                
                <label htmlFor="descripcion">Descripción:
                <textarea id="descripcion" value={descripcion} onChange={handleDescripcionChange} />
                </label>

            <button type="submit" disabled={!isFormValid()}>Enviar</button>
        </form>
    );
};


export default ContactForm;
