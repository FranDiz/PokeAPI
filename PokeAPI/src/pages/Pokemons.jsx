import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard.jsx";
import PokemonList from "../components/PokemonList.jsx";


const Pokemons = () => {
   

    return (
        <div>
            <h1>Pokemons</h1>
            <PokemonList />
        </div>
    );
};

export default Pokemons;