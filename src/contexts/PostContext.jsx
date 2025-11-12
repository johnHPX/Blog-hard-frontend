import { createContext, useContext, useState, useEffect } from "react";
import { listAllPost } from "../services/post";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPosts() {
    setLoading(true);
    try {
      const result = await listAllPost(0, 10, 1, "mid");
      setPosts(result.posts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, fetchPosts, loading }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}
