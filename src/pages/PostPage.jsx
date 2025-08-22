import { useState } from "react";
import "../styles/postPage.css";

export default function PostPage() {
  const [likes, setLikes] = useState(12); // exemplo
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Maria",
      text: "Muito bom esse post!",
      replies: [
        { id: 11, author: "João", text: "Concordo com você!" }
      ]
    },
    {
      id: 2,
      author: "Carlos",
      text: "Achei interessante, mas poderia detalhar mais.",
      replies: []
    }
  ]);

  const [newComment, setNewComment] = useState("");

  function handleAddComment() {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), author: "Você", text: newComment, replies: [] }
    ]);
    setNewComment("");
  }

  return (
    <div className="post-container">
      {/* Post */}
      <article className="post">
        <h1 className="post-title">Título da Postagem</h1>
        <p className="post-content">
          Aqui entra o conteúdo completo da postagem. Você pode renderizar HTML
          vindo do banco de dados ou Markdown convertido.
        </p>
        <div className="likes">
          <button onClick={() => setLikes(likes + 1)}>👍 Curtir</button>
          <span>{likes} curtidas</span>
        </div>
      </article>

      {/* Comentários */}
      <section className="comments">
        <h2>Comentários</h2>

        {/* Formulário */}
        <div className="add-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escreva seu comentário..."
          />
          <button onClick={handleAddComment}>Comentar</button>
        </div>

        {/* Lista de comentários */}
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c.id} className="comment">
              <p><strong>{c.author}:</strong> {c.text}</p>

              {/* Respostas */}
              <ul className="replies">
                {c.replies.map((r) => (
                  <li key={r.id}>
                    <p><strong>{r.author}:</strong> {r.text}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
