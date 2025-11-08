import PostCard from "../components/PostCard"
import "../styles/home.css"
import { useEffect, useState } from "react";
import { listAllPost } from "../services/post";

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
      <main className="container">
        <h1 className="titulo">Às 5 postagens mais curtidas</h1>
        <div className="con-flex">
          {
            posts? 
            posts.map((post, idx) => (
              <div className="con-card" key={idx}><PostCard title={post.title} excerpt={post.Content} /></div>
            ))
            :
            <p className="HError">Não há nenhuma postagem!</p>
          }
        </div>
      </main>
    </>
  );
}
