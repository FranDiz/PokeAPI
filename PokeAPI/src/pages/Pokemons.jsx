
import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext.jsx";

const Pokemons = () => {
    const { getPokemon } = useContext(PokemonContext)
    const bulbasaur = getPokemon(1)
    return (
        <div>
            <h1>Pokemons</h1>
            <p>Pokemon with id 1: {bulbasaur.name}</p>
        </div>
    );
}

export default Pokemons
