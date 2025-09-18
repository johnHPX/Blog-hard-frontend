import "../styles/navBar.css";
import { FaHome, FaBook, FaInfoCircle, FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navBar">
      {}
      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li><Link to={"/"}><FaHome /> Home</Link></li>
        <li><Link to={"/postagens"}><FaBook /> Postagens</Link></li>
        <li><Link to={"/contato"}><FaPhone /> Contato</Link></li>
        <li><Link to={"/sobre"}><FaInfoCircle /> Sobre</Link></li>
      </ul>
    </nav>
  );
}
