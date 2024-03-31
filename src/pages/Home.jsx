import React from "react";
import Navbar from "../components/Navbar.jsx";
import '../assets/styles_components/PageStructure.css';
const Home = () => {
    return (
    <div className="page___main">
                    <Navbar className="header___page"/>
                    <div className="page___main">
                        <h1>¡Bienvenido a PokeAPI!</h1> 
                        <p>Esta es una página web diseñada para ser una PokeDex personalizada.<br></br> Para empezar, registres e inicie sesión.<br></br>
                        Una vez dentro, podrá buscar y guardar pokemons en su PokeDex personalizada.
                        </p>
                    </div>
    </div>

            )
}
export default Home