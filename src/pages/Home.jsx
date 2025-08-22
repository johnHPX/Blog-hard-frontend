import PostCard from "../components/PostCard"
import "../styles/home.css"

export default function Home() {
  const posts = [
    { title: "Primeiro Post", excerpt: "Resumo do primeiro post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
  ];

  return (
    <>
      <main className="container">
        <h1 className="titulo">Às 5 postagens mais curtidas</h1>
        <div className="con-flex">
          {posts.map((post, idx) => (
          <div className="con-card"><PostCard key={idx} title={post.title} excerpt={post.excerpt} /></div>
        ))}
        </div>
      </main>
    </>
  );
}
