import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../public/css/main.css'
const api = "https://fakestoreapi.com";

function Main() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch(api + "/products")
      .then((response) => response.json())
      .then((data) => setProdutos(data),getCategorias(),
      setIsLoading(false))
      .catch((error) => console.error(error));
  }, []);

  function getCategorias(){
    let categorias = []
    categorias = produtos.map((value)=>{
      return value.category
    })
    categorias = [...new Set(categorias)]
    setCategorias(categorias)
  }

  function handleSelectChange(event){
    if(event.target.value == '') {
      let produtosDivs = Array.from(document.getElementsByClassName('produtos'))
      produtosDivs.forEach((value)=>{
        value.style.display = 'flex'
      })
    }else{
      let testClass
      let produtosDivs2 = Array.from(document.getElementsByClassName('produtos'))
      produtosDivs2.forEach((value)=>{
        value.style.display = 'flex'
        testClass = (value.className).split('produtos')
        if(testClass[1].trim() == event.target.value) return
        value.style.display = 'none'
      })
    }
  }
  
  return (
    <>
    <Header/>
    <div id='tituloMain'>
      <h1>Produtos</h1>
      <select id='categorias' onChange={handleSelectChange}>
        <option value=''>All</option>
        {categorias.map((opcao, index) => (
          <option key={index} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>
    </div>
    <main>
        {produtos.map((produto) => (
          <div key={produto.id} className={`produtos ${produto.category}`}>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} />
            <p className='descricao'>{produto.description}</p>
            <h4 className='preco'>Preço: R$ {produto.price}</h4>
            <Link to={`/detalhes/${produto.id}`}><button>Deatlhes</button></Link>
          </div>
        ))}
      </main>
      <Footer/>
    </>
  );
}

export default Main;
