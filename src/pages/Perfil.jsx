import "../styles/perfil.css"
import { usePerfilContext } from "../contexts/PerfilContext"
import LoadingSpinner from "../components/LoadingSpinner"
import { useNavigate } from "react-router-dom";

export default function Perfil() {

  const { user, loading } = usePerfilContext()
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1000);
  };

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <main className="main-perfil">
      {user ?
        <>
          <section className="perfil-card">
            <div className="perfil-avatar">
              <img src={user.avatar} alt="Avatar do usuário" />
            </div>
            <div className="perfil-info">
              <h1>{user.name}</h1>
              <p className="perfil-tel">Telefone: {user.telephone}</p>
              <p className="perfil-email">Email: {user.email}</p>
              <p className="perfil-nick">Nickname: {user.nick}</p>
              <p className="perfil-date">Conta criada em 10/12/2025</p>
            </div>
          </section>

          <section className="perfil-actions">
            <button className="btn-edit">Editar Perfil</button>
            <button className="btn-logout" onClick={handleLogout}>Sair da Conta</button>
            <button className="btn-remover">Remover Conta</button>
          </section>
        </>

        : <p>Não foi possivel carregar os dados do seu perfil</p>

      }
    </main>
  )
}
