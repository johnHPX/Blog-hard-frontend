import { useState } from "react";
import "../styles/cadastro.css"
import { createUser } from "../services/user";

import { useNavigate } from "react-router-dom";


export default function CadastroUsuario() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [nick, setNick] = useState("")
  const [email, setEmail] = useState("")
  const [secret, setSecret] = useState("")

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const data = {
      "name":name,
      "telephone":telephone,
      "nick": nick,
      "email": email,
      "secret": secret,
      "mid": "ok"
    }
    const result = await createUser(data)
    if (result.mid === "ok") {
        alert("Usuário criado com sucesso!");
        navigate("/"); 
    } else {
        alert("Falha no login. Verifique suas credenciais.");
    }

  };

  return (
    <div className="cadastro-container">
      <h1>Cadastrar Usuário</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            required
          />
        </label>

        <label>
          Nick:
          <input
            type="text"
            name="nick"
            value={nick}
            onChange={(e) => {setNick(e.target.value)}}
            required
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={telephone}
            onChange={(e) => {setTelephone(e.target.value)}}
          />
        </label>

        <label> 
          Senha:
          <input
            type="password"
            name="senha"
            value={secret}
            onChange={(e) => {setSecret(e.target.value)}}
            required
          />
        </label>

        <button type="submit" className="btn-submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
