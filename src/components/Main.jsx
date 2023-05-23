import React, { useEffect, useState } from 'react';
import Header from './Header'
import { Link } from 'react-router-dom';

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
    <Header/>
      <main>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} />
            <p>{produto.description}</p>
            <Link to={`/detalhes/${produto.id}`}>AAAAAAAAAAA</Link>
          </div>
        ))}
      </main>
    </>
  );
}

export default Main;
