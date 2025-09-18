import { useState } from "react";
import "../styles/cadastro.css"


export default function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: "",
    nick: "",
    email: "",
    telefone: "",
    senha: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
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
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Nick:
          <input
            type="text"
            name="nick"
            value={formData.nick}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </label>

        <label> 
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
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
