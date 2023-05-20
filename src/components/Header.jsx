import { useEffect, useState, Component } from 'react'
import viteLogo from '/vite.svg'
import Axios from 'axios'
import { createRoot } from 'react-dom/client';
import '../public/css/header.css'


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
                <img src={viteLogo}></img>
                <div className='menu'>
                    <h3 id='home'><a href={`#/vendaProdutos`}>Home</a></h3>
                    <h3><a href={`/vendaProdutos/pesquisa`}>Pesquisar</a></h3>
                    <h3><a>About</a></h3>
                    <h3><a>Contato</a></h3>
                </div>
                <div className='botoes'>
                    <button id='cadastro'>Cadastrar</button>
                    <button id='entrar'>Entrar</button>
                </div>
            </header>
        </>
    )
}

export default Header
