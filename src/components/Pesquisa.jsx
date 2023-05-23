import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const api = "https://fakestoreapi.com";

function Pesquisa() {
  const [produtos, setProdutos] = useState([]);
  const [produtosPesquisa, setProdutosPesquisa] = useState([])
  const [pesquisa, setPesquisa] = useState('')

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
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}></button>
    </div>
    <main>
        {produtosPesquisa.map((produto) => (
          <div key={produto.id} className={`produtos ${produto.category}`}>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} />
            <p className='descricao'>{produto.description}</p>
            <h4 className='preco'>Preço: R$ {produto.price}</h4>
            <Link to={`/detalhes/${produto.id}`}><button>Deatlhes</button></Link>
          </div>
        ))}
      </main>
    </>
    
  );
}

export default Pesquisa;