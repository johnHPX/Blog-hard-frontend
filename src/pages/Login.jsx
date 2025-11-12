import { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user";

import LoadingSpinner from "../components/LoadingSpinner";
import MessageBox from "../components/MessageBox";

export default function LoginUsuario() {
  const navigate = useNavigate();

  const [nick, setNick] = useState("");
  const [secret, setSecret] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    try {
      const result = await login(nick, secret);

      if (result?.token) {
        localStorage.setItem("token", result.token);

        setMessageType("success");
        setMessage("Login realizado com sucesso!");
        
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      } else {
        setMessageType("error");
        setMessage("Falha no login. Verifique suas credenciais.");
      }
    } catch (err) {
      console.error(err);
      setMessageType("error");
      setMessage("Erro ao conectar-se ao servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner/>

  return (
    <div className="login-container">
      {message && (
        <MessageBox
          type={messageType}
          message={message}
          onClose={() => setMessage(null)}
        />
      )}

      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <p>Email ou Nick:</p>
          <input
            type="text"
            name="nick"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            required
          />
        </label>

        <label>
          <p>Senha:</p>
          <input
            type="password"
            name="senha"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="btn-login-submit"
          disabled={loading} 
        >
          {loading ? "Entrando..." : "Login"}
        </button>
      </form>
    </div>
  );
}
