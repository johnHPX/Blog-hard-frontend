import PostCard from "../components/PostCard"
import "../styles/home.css"
import { useEffect, useState } from "react";
import { listAllPost } from "../services/post";

import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Home() {
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
      <Header />
      <main className="container">
        <h1 className="titulo">Às 5 postagens mais curtidas</h1>
        <div className="con-flex">
          {posts.map((post, idx) => (
          <div className="con-card"><PostCard key={idx} title={post.title} excerpt={post.excerpt} /></div>
        ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}
