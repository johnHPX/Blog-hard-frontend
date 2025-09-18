import { useState } from "react";
import "../styles/login.css"


export default function LoginUsuario() {
  const [nick, setNick] = useState("")
  const [secret, setSecret] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <p>Nick:</p>
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
            onChange={(e) => setNick(e.target.value)}
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
