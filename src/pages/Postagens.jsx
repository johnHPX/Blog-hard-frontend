import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "../styles/postagens.css";
import { listAllPost, findByCategory } from "../services/post";
import { FaSearch } from "react-icons/fa";

import { usePosts } from "../contexts/PostContext";

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


export default function Postagens() {
  const [value, setValue] = useState("");
  const { posts, setPosts, loading } = usePosts();

  async function findPost() {
    try {
      const query = capitalize(value.trim());

      let result;
      if (query === "") {
        result = await listAllPost();
      } else {
        result = await findByCategory(query);
      }

      if (!result || !result.posts || result.posts.length === 0) {
        setPosts([]);
        return;
      }

      setPosts(result.posts);
    } catch (err) {
      console.error(err);
      setPosts([]); 
    }
  }

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const result = await listAllPost();
        setPosts(result.posts);
      } catch (err) {
        console.error(err);
      }
    };

    if (value.trim() === "") {
      fetchAllPosts();
    }
  }, [value]);


  if (loading) return <p>Carregando...</p>;

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
        {posts && posts.length > 0 ? (
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
