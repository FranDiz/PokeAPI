import React from "react";
import { Outlet } from "react-router-dom";


const LayoutRoot = () => {
    return (
        <div>
            
            <Outlet />
        </div>
    )
} 
export default LayoutRoot