import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard.jsx";
import PokemonList from "../components/PokemonList.jsx";
import Filterbar from "../components/Filterbar.jsx";


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonAmount, setPokemonAmount] = useState(0);

    const getPokemons = async (pokemonAmount) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${pokemonAmount}`);
        const data = await res.json();
        setPokemons((prevPokemons) => [...prevPokemons, ...data.results]);
        console.log(data.results);
        console.log(pokemons[0].url);
    };

    const morePokemonAmount = () => {
        setPokemonAmount(pokemonAmount + 50);
    }

    useEffect(() => {
        getPokemons(pokemonAmount);
    }, [pokemonAmount]);

    return (
        <div>
            <Filterbar />
            <h1>Pokemons</h1>
            <div>
                <PokemonList pokemonArray={pokemons} />
                <button onClick={morePokemonAmount}>Cargar más</button>
            </div>
        </div>
    );
};

export default Pokemons;