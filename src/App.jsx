import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home"
import Postagens from "./pages/Postagens"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import PostPage from "./pages/PostPage"
import Cadastro from "./pages/Cadastro";
import LoginUsuario from "./pages/Login";
import Perfil from "./pages/Perfil";

import Header from "./components/Header";
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="page-container">
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postagens" element={<Postagens />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<LoginUsuario />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}
