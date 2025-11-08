import { useState } from "react";
import "../styles/login.css"
import { useNavigate } from "react-router-dom";

import { login } from "../services/user";

export default function LoginUsuario() {
  const navigate = useNavigate();

  const [nick, setNick] = useState("")
  const [secret, setSecret] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result =  await login(nick, secret)
    if (result.token !== null && result.token !== undefined) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("token", result.token);
        navigate("/"); 
    } else {
        alert("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <p>Email or Nick:</p>
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

        <button type="submit" className="btn-login-submit">
          Login
        </button>
      </form>
    </div>
  );
}
