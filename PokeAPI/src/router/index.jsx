import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layouts/LayoutRoot.jsx";
import { Children } from "react";
import Home from "../pages/Home.jsx";
import Pokemons from "../pages/Pokemons.jsx";
import SignIn from "../pages/SignIn.jsx";
import LogIn from "../pages/LogIn.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        children: [
            {
                path: "/",
                index:true,
                element: <Home />
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
            }
        ]
    }
])

export default router;