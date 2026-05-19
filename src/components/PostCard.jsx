import "../styles/postCard.css"
import { Link } from "react-router-dom"

import ReactMarkdown from "react-markdown";

export default function PostCard({ id, title, content }) {

  const preview = content.slice(0, 180) + "..."

  return (
    <div className="postCard">
      <div className="markdown-content-card">
      <ReactMarkdown>
        {preview}
      </ReactMarkdown>
      </div>
      <Link to={`/post/${id}`} className="link-ver-mais">Ler mais</Link>
    </div>
  );
}
