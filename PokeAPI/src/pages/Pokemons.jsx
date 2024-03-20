import React from "react";
import PokemonList from "../components/PokemonList.jsx";
import '../assets/styles_components/PokemonList.css';
import Navbar from "../components/Navbar.jsx";

const Pokemons = () => {
   

    return (
        <div className='page___main'>
            <Navbar className="header___page"/>
            <h1>Pokemons</h1>
            <PokemonList className='page___main'/>
        </div>
    );
};

export default Pokemons;