import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layouts/LayoutRoot.jsx";
import LayoutPrivate from "../layouts/LayoutPrivate.jsx"
import { Children } from "react";
import Home from "../pages/Home.jsx";
import Pokemons from "../pages/Pokemons.jsx";
import SignIn from "../pages/SignIn.jsx";
import LogIn from "../pages/LogIn.jsx";
import Error from "../pages/ErrorPage.jsx";
import PokemonData from "../pages/PokemonData.jsx";
import Contacto from "../pages/Contacto.jsx";
import Perfil from "../pages/Perfil.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        errorElement:<Error/>,
        children: [
            {
                path: "/", // Home route
                index: true,
                element: <Home />,
                errorElement:<Error/>
            },
            {
                path: "/contact",
                element:<Contacto/>,
                errorElement:<Error/>
            },
            
            {
                path: "/signin",
                element: <SignIn />,
                errorElement:<Error/>
            },
            {
                path: "/login",
                element: <LogIn />,
                errorElement:<Error/>
            },
            {
                path: "/", 
                element: <LayoutPrivate />,
                children: [
                    {
                        path: "/pokemons",
                        element: <Pokemons />,
                        errorElement:<Error/>
                    },
                    {
                        path: "/profile",
                        element: <Perfil />,
                        errorElement:<Error/>
                    },
                    {
                        path: "/pokemon/:id",
                        element: <PokemonData />,
                        errorElement:<Error/>
                    }
                ]
            }
        ]
    }
]);

export default router;
