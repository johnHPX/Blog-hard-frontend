import Navbar from "./Navbar";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-flex">
        <img src="/images/logo.svg" alt="Logo BlogHard" className="logo" />
        <Navbar />
      </div>
      <div className="banner"></div>
    </header>
  );
}
