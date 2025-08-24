import "../styles/contato.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Contato() {
  return (
    <>
    <Header />
    <main className="contato">
      <h1>Entre em Contato</h1>
      <p>Envie sua mensagem pelo formulário abaixo ou pelas redes sociais.</p>

      <form className="contato-form">
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="seu@email.com" required />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..." required></textarea>

        <button type="submit">Enviar</button>
      </form>

      <section className="contato-info">
        <h2>Outros meios</h2>
        <p>Email: contato@meublog.com</p>
        <p>GitHub: <a href="https://github.com/seuuser" target="_blank">/seuuser</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/seuuser" target="_blank">/seuuser</a></p>
      </section>
    </main>
     <Footer/>
    </>
  );
}
