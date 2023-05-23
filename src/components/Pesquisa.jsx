import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import '../public/css/pesquisa.css'

const api = "https://fakestoreapi.com";

function Pesquisa() {
  const [produtos, setProdutos] = useState([]);
  let [pesquisa, setPesquisa] = useState('')

  useEffect(() => {
    fetch(api + "/products/search?"+pesquisa)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
}, []);
  function handleClick(){
  }

  function handleSearch(e){
    setPesquisa(pesquisa = e.target.value)
  }
  return (
    <>
    <Header/>
    <div id='pesquisa'>
      <input type="text" placeholder='Pesquise por um produto...' onChange={handleSearch}/>
      <button onClick={handleClick}></button>
    </div>
    </>
  );
}

export default Pesquisa;