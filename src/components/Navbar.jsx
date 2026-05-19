import "../styles/navBar.css";
import { FaHome, FaBook, FaInfoCircle, FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

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
        <li><Link to={"/"} onClick={closeMenu}><FaHome /> Home</Link></li>
        <li><Link to={"/postagens"} onClick={closeMenu}><FaBook /> Postagens</Link></li>
        <li><Link to={"/contato"} onClick={closeMenu}><FaPhone /> Contato</Link></li>
        <li><Link to={"/sobre"} onClick={closeMenu}><FaInfoCircle /> Sobre</Link></li>
      </ul>
    </nav>
  );
}
