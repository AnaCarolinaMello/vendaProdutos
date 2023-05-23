import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../public/css/pesquisa.css'
const api = "https://fakestoreapi.com";

function Pesquisa() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(api + "/products")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error(error));
  }, []);
  function handleClick(){
    setProdutosPesquisa(produtos.filter(x => x.title.toLowerCase().includes(pesquisa.toLowerCase()) || x.category.toLowerCase().includes(pesquisa.toLowerCase())))
  }

  function handleChange(event){
    setPesquisa(event.target.value)
  }
  return (
    <>
    <Header/>
    <div id='pesquisa'>
      <input type="text" placeholder='Pesquise por um produto...' onChange={handleChange}/>
      <button onClick={handleClick}></button>
    </div>
    </>  
  );
}

export default Pesquisa;