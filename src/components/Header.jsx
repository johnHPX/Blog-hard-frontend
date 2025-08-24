import Navbar from "./Navbar";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header({ isSearch }) {
  return (
    <header className="header">
      <div className="header-flex">
        <Link to={"/"} className="logo"><img src="/images/logo.svg" alt="Logo BlogHard" /></Link>
        <Navbar />
      </div>
      {
        isSearch? 
        <div className="search">
          <input type="text" placeholder="Pesquisa"/>
          <button><FaSearch color="#fff"/></button>
      </div>
      :
      <></>
      }
      <div className="banner"></div>
    </header>
  );
}
