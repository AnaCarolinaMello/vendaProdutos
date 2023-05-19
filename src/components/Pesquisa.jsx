import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const api = "https://fakestoreapi.com";

function Pesquisa() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(api + "/products/")
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>Teste</h1>
      <p></p>
    </div>
  );
}

export default Pesquisa;