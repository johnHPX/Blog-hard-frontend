import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "../styles/postagens.css";
import { listAllPost, findByCategory } from "../services/post";
import { FaSearch } from "react-icons/fa";

export default function Postagens() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        const result = await listAllPost();
        setPosts(result.posts);
      } catch (err) {
        console.error(err);
      }
    }
    getPosts();
  }, []);

  async function findPost() {
    try {
      if (value.trim() === "") {
        const result = await listAllPost();
        setPosts(result.posts);
      } else {
        const result = await findByCategory(value);
        setPosts(result.posts);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="con-postagem">
      <div className="search">
        <input
          type="text"
          placeholder="Pesquisar por título ou categoria"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={findPost}>
          <FaSearch color="#fff" />
        </button>
      </div>

      <div className="con-postagem-flex">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="fix-postagem-card">
              <PostCard title={post.title} excerpt={post.Content} />
            </div>
          ))
        ) : (
          <p className="pError">Não foram encontradas postagens com essa categoria!</p>
        )}
      </div>
    </main>
  );
}
