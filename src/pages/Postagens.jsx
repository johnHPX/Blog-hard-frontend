import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "../styles/postagens.css"

import { listAllPost, findByCategory } from "../services/post";
import { FaSearch } from "react-icons/fa";

export default function Postagens(){
  const [posts, setPosts] = useState([])
  const [value, setValue] = useState("")

  useEffect(() => {
    if (value == ""){
      async function getPosts() {
        try{
          const result =  await listAllPost()
          setPosts(result.posts)
        }catch(err){
          console.log(err)
        }
      }

      getPosts()
    }
  }, [value])

  async function findPost(){
      try{
        const result =  await findByCategory(value)
        setPosts(result.posts)
      }catch(err){
        console.log(err)
      }
  }


  return (
    <>
      <main className="con-postagem">
        <div className="search">
            <input type="text" placeholder="Pesquisar por titulo ou categoria" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button><FaSearch color="#fff" onClick={() => findPost()}/></button>
        </div>
        <div className="con-postagem-flex">
          {
            posts? 
            posts.map((post, idx) => (
              <div className="fix-postagem-card"><PostCard key={idx} title={post.title} excerpt={post.Content} /></div>
            ))
            :
            <p className="HomeError">Não foram encontradas postagens com essa categoria!</p>
          }
        </div>
      </main>
    </>
  );
}