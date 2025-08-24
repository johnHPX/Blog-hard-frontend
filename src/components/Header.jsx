import Navbar from "./Navbar";
import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-flex">
        <Link to={"/"} className="logo"><img src="/images/logo.svg" alt="Logo BlogHard" /></Link>
        <Navbar />
      </div>
      <div className="banner"></div>
    </header>
  );
}
