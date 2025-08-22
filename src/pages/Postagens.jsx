import PostCard from "../components/PostCard";
import "../styles/postagens.css"

export default function Postagens(){
  const posts = [
    { title: "Primeiro Post", excerpt: "Resumo do primeiro post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
    { title: "Segundo Post", excerpt: "Resumo do segundo post..." },
  ];

  return (
    <>
      <main className="con-postagem">
        <div className="con-postagem-flex">
          {posts.map((post, idx) => (
          <div className="fix-postagem-card"><PostCard key={idx} title={post.title} excerpt={post.excerpt} /></div>
        ))}
        </div>
      </main>
    </>
  );
}