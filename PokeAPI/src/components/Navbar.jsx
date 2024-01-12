import { useNavigate, NavLink } from "react-router-dom";
import { React, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const logOut = () => {
        setUser(!user);
        navigate("/");
    };

    const logIn = () => {
        navigate("/login");
    };

    return (
        <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI logo" />
            <nav>
                <NavLink to="/">Inicio </NavLink>
                {user ? (
                    <>
                        <NavLink to="/pokemons">Pokemons </NavLink>
                        <button onClick={logOut}>CerrarSesión</button>
                        <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" alt="User icon" style={{ width: '50px' }} />
                    </>
                ) : (
                    <>
                        <NavLink to="/signin">Registrarse </NavLink>
                        <button onClick={logIn}>IniciarSesión</button>
                    </>
                )}

                
            </nav>
        </div>
    );
};

export default Navbar;
