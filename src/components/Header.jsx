import { useEffect, useState, Component } from 'react'
import Axios from 'axios'
import { createRoot } from 'react-dom/client';

function Header(){
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        }, []);
    return(
        <>
            <header>
                <img></img>
                <p>Home</p>
            </header>
        </>
    )
}

export default Header
