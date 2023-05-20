import React, { useEffect, useState } from 'react';
import Header from './Header'

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
            <img src={produto.image} alt={produto.title} />
            <p>{produto.title}</p>
            <a href={`#/vendaProdutos/delathes/${produto.id}`}>AAAAAAAAAAA</a>
          </div>
        ))}
      </main>
    </>
  );
}

export default Main;
