import { useState } from "react";
import "../styles/cadastro.css"
import { createUser } from "../services/user";

import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../components/LoadingSpinner";
import MessageBox from "../components/MessageBox";


export default function CadastroUsuario() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [nick, setNick] = useState("")
  const [email, setEmail] = useState("")
  const [secret, setSecret] = useState("")

  // Loading and Message
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState("success")

  const handleSubmit =  async (e) => {
    e.preventDefault();

    if (loading) return

    setLoading(true)

    try{
      const data = {
      "name":name.toLowerCase(),
      "telephone":telephone,
      "nick": nick.toLowerCase(),
      "email": email.toLowerCase(),
      "secret": secret,
      "mid": "ok"
      }

      const result = await createUser(data)
      if (result && result.status === 200) {
          setMessageType("success")
          setMessage("Usuário cadastrado com sucesso!")
        
          setTimeout(() => {
            navigate("/")
          }, 2000)
      }

    }catch(err){
      const errorMsg =
        err.response?.data?.message ||
        "Erro ao conectar-se ao servidor. Tente novamente."

      setMessageType("error")
      setMessage(errorMsg)
    }finally{
      setLoading(false)
    }

  }

  if (loading) return <LoadingSpinner/>

  return (
    <div className="cadastro-container">

      {message && (
        <MessageBox
          type={messageType}
          message={message}
          onClose={() => setMessage(null)}
        />
      )}


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

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
