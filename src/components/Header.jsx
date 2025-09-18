import Navbar from "./Navbar";
import "../styles/header.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <div className="header-flex">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="Logo BlogHard" />
        </Link>

        <Navbar />

        <ul className="login-session">
          <li><Link to="/cadastro">Cadastre-se</Link></li>
          <li><Link to="/login">Faça login</Link></li>
        </ul>

      </div>

      <div className="banner"></div>
      
    </header>
  );
}
