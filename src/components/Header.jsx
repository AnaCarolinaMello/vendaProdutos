import { useEffect, useState, Component } from 'react'
import viteLogo from '/vite.svg'
import Axios from 'axios'
import { createRoot } from 'react-dom/client';
import '../public/css/header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <header>
                <img src={viteLogo}></img>
                <div className='menu'>
                    <h3 id='home'><Link to={`/`}>Home</Link></h3>
                    <h3><Link to={`/pesquisa`}>Pesquisar</Link></h3>
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
