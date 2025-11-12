import { createContext, useContext, useEffect, useState } from "react";
import { listAllPost } from "../services/post";

const FeaturedPostContext = createContext();

export function FeaturedPostProvider({ children }) {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const result = await listAllPost(0, 5, 1);
        setFeaturedPosts(result.posts);
      } catch (err) {
        console.error("Erro ao carregar postagens em destaque:", err);
      } finally {
        setLoading(false);
      }
    }

    loadFeatured();
  }, []);

  return (
    <FeaturedPostContext.Provider value={{ featuredPosts, loading }}>
      {children}
    </FeaturedPostContext.Provider>
  );
}

export function useFeaturedPosts() {
  return useContext(FeaturedPostContext);
}
