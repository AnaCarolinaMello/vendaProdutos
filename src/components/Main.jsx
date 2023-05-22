import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
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
          <div key={produto.id} className='produtos'>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} />
            <p className='descricao'>{produto.description}</p>
            <p className='preco'>Preço: R$ {produto.price}</p>
            <a href={`/vendaProdutos/delathes/${produto.id}`}><button>Detalhes</button></a>
          </div>
        ))}
      </main>
      <Footer/>
    </>
  );
}

export default Main;