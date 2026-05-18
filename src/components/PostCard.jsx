import "../styles/postCard.css"
import { Link } from "react-router-dom"

import ReactMarkdown from "react-markdown";

export default function PostCard({ id, title, content }) {

  const preview = content.slice(0, 180) + "..."

  return (
    <div className="postCard">
      <h2>{title}</h2>
      <ReactMarkdown>
        {preview}
      </ReactMarkdown>
      <Link to={`/post/${id}`}>Ler mais</Link>
    </div>
  );
}
