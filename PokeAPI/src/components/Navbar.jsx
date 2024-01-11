import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI logo" />
        <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/pokemons">Pokemons </NavLink>
            <NavLink to="/signin">SignIn </NavLink>
            <NavLink to="/login">LogIn</NavLink>
        </nav>
        </div>
    )
}

export default Navbar