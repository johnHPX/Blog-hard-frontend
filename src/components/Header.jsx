import Navbar from "./Navbar";
import "../styles/header.css";
import { Link } from "react-router-dom";


export default function Header() {
  const token = localStorage.getItem("token")
  return (
    <header className="header">
      <div className="header-flex">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="Logo BlogHard" />
        </Link>

        <Navbar />


        {
          token ? (
            <ul className="login-session">
              <li><Link to="/perfil">Meu Perfil</Link></li>
            </ul>
          ) : (
            <ul className="login-session">
              <li><Link to="/cadastro">Cadastre-se</Link></li>
              <li><Link to="/login">Faça login</Link></li>
            </ul>
          )
        }

      </div>

      {/* <div className="banner"></div> */}
      
    </header>
  );
}
