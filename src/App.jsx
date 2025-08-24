import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Postagens from "./pages/Postagens"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import PostPage from "./pages/PostPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postagens" element={<Postagens />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
}
