import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
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
        {/* Componente da tela inicial */}
        <Route path='/vendaProdutos' element={<Main />} />
        {/* Componente de uma rota específica */}
        <Route path="/vendaProdutos/delathes/:id?" element={<Detalhes />} />
      </Routes>
    </>
  )
}

export default App
