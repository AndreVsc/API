import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apFetch from '../api/config';
function Posts() {

  const [post,setPost]= useState([]);
  // Setando post onde vai ser uma lista vazia onde adicionaremos os objetos trazidos pela API via JSON
  

  const getPost = async() => {
  // Função assincrona para chamada
    try {
    // Serve para tratamento de erros
      const response = await apFetch.get("/posts");
      // Espera ate pegar os dados do endpoint da API
      const data = response.data;
      // Guarda e orgazina os dados em objetos
      setPost(data);
      // Adiciona os dados a lista
    } catch (error) {
      //Caso erro
      console.log("erro!");
      // Medida preventiva 
    }
  }

  useEffect(()=>{
  // Hook para evitar mais renderizações do que o necessario
    getPost();
  },[]);
  // Lista vazia para executar apenas uma unica vez quando o componente for chamado

  return (
    <>
        <h1>Últimos posts</h1>
        {post.length === 0 ? (<h3>Carregando...</h3>):(
          post.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} >Saiba mais</Link>
              <hr />
            </div>
          )))}
        {/*Renderização dos dados*/}
    </>
  )
};

export default Posts;