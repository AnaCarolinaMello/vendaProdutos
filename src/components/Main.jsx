import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Detalhes from './Detalhes';
// import Routes from '../Routes';
import { BrowserRouter as Router, useParams, Link, } from 'react-router-dom';

const api = "https://fakestoreapi.com";

function Main() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(api + "/products")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <main>
    {/* <Routes /> */}
        {produtos.map((produto) => (
          <div key={produto.id}>
            <img src={produto.image} alt={produto.title} />
            <p>{produto.title}</p>
            <a href={`/vendaProdutos/delathes/${produto.id}`}>AAAAAAAAAAA</a>
            {/* <Link to={`/detalhes/${produto.id}`}>
              a
            </Link> */}
          </div>
        ))}
      </main>
    </>
  );
}

export default Main;