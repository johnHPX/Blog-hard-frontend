import "../styles/postCard.css";
import { Link } from "react-router-dom";

export default function PostCard({ title, excerpt }) {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Link to={"/post/1"}>Ler mais</Link>
    </div>
  );
}
