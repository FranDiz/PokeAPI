import { useNavigate, NavLink } from "react-router-dom";
import { React, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { SessionContext } from "../context/SessionContext.jsx";
import "../assets/styles_components/Navbar.css";

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const {logout, session} = useContext(SessionContext);
    const navigate = useNavigate();

    //Cambiar el estado de user a false y cerrar sesion
    const logOut = () => {
        setUser(!user);
        logout();
        navigate("/");
        localStorage.setItem('currentUserKey', 'none');
    };  

    const singIn = () => {
        navigate("/signin");
    };
    const logIn = () => {
        navigate("/login");
    };

    return (
        <div className="header">
            <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokeAPI logo" />
            <nav className="header___links">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/contact">Contacto</NavLink>
                {user ? (
                    <>
                        <NavLink to="/pokemons">Pokemons </NavLink>
                        <NavLink to="/profile">Perfil</NavLink>
                        <button className="header___buttons" onClick={logOut}>CerrarSesión</button>
                        
                    </>
                ) : (
                    <>
                        <button className="header___buttons" onClick={singIn}>Registrarse</button>
                        <button className="header___buttons" onClick={logIn}>IniciarSesión</button>
                    </>
                )}

                
            </nav>
        </div>
    );
};

export default Navbar;
