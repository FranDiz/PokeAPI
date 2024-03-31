import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const Error =()=>{
    const { error } = useRouteError();
    return (
        <div className='page___main'>
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    )
}
export default Error;