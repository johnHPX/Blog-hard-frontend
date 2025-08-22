import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-footer">
          <h2>BlogHard</h2>
        </div>
        <ul className="footer-links">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/postagens"}>Postagens</Link></li>
          <li><Link to={"/contato"}>Contato</Link></li>
          <li><Link to={"/sobre"}>Sobre</Link></li>
        </ul>
        <div className="social-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 BlogHard. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
