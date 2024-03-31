import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


//Contador que si llega a 0 cambia de pagina
const Timer = () => {
    const [count, setCount] = useState(50);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);

        if (count === 0) {
            navigate("/");
        }

        return () => clearInterval(interval);
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default Timer;
