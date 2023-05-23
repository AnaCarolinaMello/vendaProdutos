import { useEffect, useState, Component } from 'react'
import viteLogo from '/vite.svg'
import Axios from 'axios'
import { createRoot } from 'react-dom/client';
import '../public/css/footer.css'


function Footer(){
    return(
        <>
            <footer>
                <div id='divLogo'>
                    <img src={viteLogo}></img>
                </div>
                <div className='informacoes'>
                    <h3>Ana Carolina Caldas de Mello</h3>
                    <h3>Código pessoal: 1439652</h3>
                    <h3>Matrícula: 801198</h3>
                    <h3>Curso: Engenharia de software</h3>
                </div>
                <div className='botoes'>
                    <button id='cadastro'>Cadastrar</button>
                    <button id='entrar'>Entrar</button>
                </div>
            </footer>
        </>
    )
}

export default Footer