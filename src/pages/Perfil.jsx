import "../styles/perfil.css"
import { useEffect, useState } from "react"

export default function Perfil() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Exemplo: simulando carregamento da API
    const fetchUser = async () => {
      try {
        // Aqui você faria: const response = await api.get("/user/profile")
        const response = {
          name: "John",
          email: "john@example.com",
          role: "Estudante de Sistemas de Informação",
          createdAt: "2024-03-10",
          avatar: "https://avatars.githubusercontent.com/u/9919?v=4"
        }

        setTimeout(() => {
          setUser(response)
          setLoading(false)
        }, 1000)
      } catch (err) {
        console.error("Erro ao carregar perfil:", err)
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (loading) {
    return (
      <div className="perfil-loading">
        <div className="spinner"></div>
        <p>Carregando dados do perfil...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="perfil-error">
        <p>Não foi possível carregar o perfil.</p>
      </div>
    )
  }

  return (
    <main className="main-perfil">
      <section className="perfil-card">
        <div className="perfil-avatar">
          <img src={user.avatar} alt="Avatar do usuário" />
        </div>
        <div className="perfil-info">
          <h1>{user.name}</h1>
          <p className="perfil-email">{user.email}</p>
          <p className="perfil-role">{user.role}</p>
          <p className="perfil-date">Conta criada em {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="perfil-actions">
        <button className="btn-edit">Editar Perfil</button>
        <button className="btn-logout">Sair da Conta</button>
      </section>
    </main>
  )
}
