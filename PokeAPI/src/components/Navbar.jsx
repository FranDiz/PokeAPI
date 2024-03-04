import { useNavigate, NavLink } from "react-router-dom";
import { React, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { SessionContext } from "../context/SessionContext.jsx";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const {logout, session} = useContext(SessionContext);
    const navigate = useNavigate();

    //Cambiar el estado de user a false y cerrar sesion
    const logOut = () => {
        setUser(!user);
        logout();
        navigate("/");
    };  

    const logIn = () => {
        navigate("/login");
    };

    return (
        <div >
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI logo" />
            <nav>
                <NavLink to="/">Inicio </NavLink>
                <NavLink to="/contact">Contacto</NavLink>
                {user ? (
                    <>
                        <NavLink to="/pokemons">Pokemons </NavLink>
                        <NavLink to="/profile">Perfil</NavLink>
                        <button onClick={logOut}>CerrarSesión</button>
                        
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
