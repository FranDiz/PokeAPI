import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layouts/LayoutRoot.jsx";
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
                errorElement:<Error/>,
                children:[
                    {
                        path: "/",
                        index:true,
                        element: <Home />
                    },
                    {
                        path: "/contact",
                        index:true,
                        element:<Contacto/>
                    },
                
            
                    {
                        path: "/pokemons",
                        index:true,
                        element: <Pokemons />
                    },
                    {
                        path: "/signin",
                        index:true,
                        element: <SignIn />
                    },
                    {
                        path: "/login",
                        index:true,
                        element: <LogIn />
                    },
                    {
                        path: "/profile",
                        index:true,
                        element:<Perfil/>
                    },
                    {
                        path: "/pokemon/:id",
                        index:true,
                        element: <PokemonData />
                    }
                ]
            }
            
        ]
    }
])

export default router;