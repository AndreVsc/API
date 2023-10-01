import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apFetch from '../api/config';
function Posts() {
   
  const [post,setPost]= useState([]);
  
  const getPost = async() => {
    try {
      const response = await apFetch.get("/posts");

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log("erro!");
    }
  }

  useEffect(()=>{
    getPost();
  },[]);

  return (
    <>
        <h1>Últimos posts</h1>
        {post.length === 0 ? (<p>Carregando...</p>):(
          post.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} >Saiba mais</Link>
              <hr />
            </div>
          )))}

    </>
  )
};

export default Posts;