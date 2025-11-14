import { createContext, useContext, useEffect, useState } from "react";
import { listAllPost } from "../services/post";

const FeaturedPostContext = createContext();

export function FeaturedPostProvider({ children }) {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      const result = await listAllPost(0, 5, 1, "ok");
      console.log(result)

      if (result && result?.posts) {
        setFeaturedPosts(result.posts);
      } else {
        setFeaturedPosts([]);
      }

      setLoading(false);
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
