import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Pesquisa from './components/Pesquisa'
import Detalhes from './components/Detalhes'

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Routes>
        <Route path='#/vendaProdutos' element={<Main />} />
        <Route path='#/vendaProdutos/pesquisa' element={<Pesquisa />} />
        <Route path="#/vendaProdutos/delathes/:id?" element={<Detalhes />} />
      </Routes>
    </>
  )
}

export default App
