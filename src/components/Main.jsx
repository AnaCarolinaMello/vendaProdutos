import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../public/css/main.css'
const api = "https://fakestoreapi.com";

function Main() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(api + "/products")
      .then((response) => response.json())
      .then((data) => setProdutos(data),
      setIsLoading(false))
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
      <Footer/>
    </>
  );
}

export default Main;
