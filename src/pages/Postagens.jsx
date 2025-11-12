import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import "../styles/postagens.css";
import { listAllPost, findByCategory } from "../services/post";
import { FaSearch } from "react-icons/fa";

import { usePosts } from "../contexts/PostContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { capitalize } from "../util/wordConvensor";

export default function Postagens() {
  const [value, setValue] = useState("");
  const [searching, setSearching] = useState(false);
  const { posts, setPosts } = usePosts();

  async function findPost() {
    try {
      setSearching(true); 

      const query = capitalize(value.trim());
      let result;

      if (query === "") {
        result = await listAllPost();
      } else {
        result = await findByCategory(query, 0, 5, 1, "mid");
      }

      if (!result || !result.posts || result.posts.length === 0) {
        setPosts([]);
        return;
      }

      setPosts(result.posts);
    } catch (err) {
      console.error(err);
      setPosts([]);
    } finally {
      setSearching(false);
    }
  }

  // useEffect(() => {
  //   const fetchAllPosts = async () => {
  //     try {
  //       setSearching(true); 
  //       const result = await listAllPost();
  //       setPosts(result.posts);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setSearching(false); 
  //     }
  //   };

  //   if (value.trim() === "") {
  //     fetchAllPosts();
  //   }
  // }, [value]);

  if (searching) return <LoadingSpinner />;

  return (
    <main className="con-postagem">
      <div className="search">
        <input
          type="text"
          placeholder="Pesquisar por categoria"
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
          <p className="pError">
            Não foram encontradas postagens com essa categoria!
          </p>
        )}
      </div>
    </main>
  );
}
