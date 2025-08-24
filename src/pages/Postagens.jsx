import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "../styles/postagens.css"

import { listAllPost } from "../services/post";

import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Postagens(){
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      try{
        const result =  await listAllPost()
        setPosts(result.posts)
      }catch(err){
        console.log(err)
      }
    }

    getPosts()

  }, [])

  return (
    <>
      <Header isSearch={true}/>
      <main className="con-postagem">
        <div className="con-postagem-flex">
          {posts.map((post, idx) => (
          <div className="fix-postagem-card"><PostCard key={idx} title={post.title} excerpt={post.Content} /></div>
        ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}