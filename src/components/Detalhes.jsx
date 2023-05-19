import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h1>{produto.title}</h1>
      <img src={produto.image}></img>
      <p></p>
    </div>
  );
}

export default Detalhes;