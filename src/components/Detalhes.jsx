import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../public/css/detalhes.css'

const api = "https://fakestoreapi.com";

function Detalhes() {
  const id = useParams()
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch(api + "/products/"+id.id)
      .then((response) => response.json())
      .then((data) => setProduto(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
    <Header/>
    <div id='detalhes'>
      <div id='titulo'>
        <Link to={'/'}><h2 id='voltar'>&lt; Voltar</h2></Link>
        <h1 id='produtoTitulo'>{produto.title}</h1>
      </div>
      <div id='produto'>
        <div id='imagem'>
          <img src={produto.image}></img>
        </div>
        <div id='comprar'>
          <h2>Preço: R$ {produto.price}</h2>
          <p>{produto.description}</p>
          <button>Comprar</button>
        </div>
      </div>
      <p></p>
    </div>
    </>
  );
}

export default Detalhes;