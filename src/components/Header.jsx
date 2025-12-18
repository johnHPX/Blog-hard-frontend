import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  useEffect(() => {
    const checkToken = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  return (
    <header className="header">
      <div className="header-flex">
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="Logo BlogHard" />
        </Link>

        <Navbar />

        {token ? (
          <ul className="login-session-with-profile">
            {/* <li className="login-session-logout">
              <button onClick={handleLogout}>Sair</button>
            </li> */}
            <li>
              <Link to="/perfil">
                <img
                  src="/images/profile.jpg"
                  alt="Foto do perfil do usuário"
                />
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="login-session">
            <li><Link to="/cadastro">Cadastre-se</Link></li>
            <li><Link to="/login">Faça login</Link></li>
          </ul>
        )}
      </div>
    </header>
  );
}
