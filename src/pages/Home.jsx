import PostCard from "../components/PostCard";
import "../styles/home.css";
import { useFeaturedPosts } from "../contexts/FeaturedPostContext";

import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const { featuredPosts, loading } = useFeaturedPosts();

  if (loading) return <LoadingSpinner/>

  return (
    <main className="container">
      <div className="con-flex">
        {featuredPosts.length > 0 ? (
          featuredPosts.map((post) => (
            <div className="con-card" key={post.id}>
              <PostCard title={post.title} excerpt={post.Content} />
            </div>
          ))
        ) : (
          <p className="HError">Não há postagens!</p>
        )}
      </div>
    </main>
  );
}
