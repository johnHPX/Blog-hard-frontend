import "../styles/sobre.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Sobre() {
  return (
    <>
    <Header />
    <main className="sobre">
      <h1>Sobre o Blog</h1>
      <p>
        O <strong>BlogHard</strong> foi criado com o objetivo de compartilhar conhecimentos em 
        <em> programação, tecnologia e ciência da computação</em>. 
        Aqui você encontrará tutoriais, dicas, artigos e reflexões voltadas para estudantes, 
        profissionais e entusiastas da área.
      </p>

      <section className="sobre-autor">
        <h2>Sobre o Autor</h2>
        <p>
          Meu nome é <strong>John</strong>, sou estudante de <em>Sistemas de Informação</em> e 
          técnico em informática. Tenho interesse por <em>desenvolvimento web, mobile, jogos</em> 
          e também por <em>matemática e ciência da computação</em>.
        </p>
        <p>
          Este blog também é parte do meu processo de aprendizado e prática, além de um espaço 
          para contribuir com a comunidade.
        </p>
      </section>

      <section className="sobre-missao">
        <h2>Missão</h2>
        <p>
          Promover o aprendizado acessível e de qualidade em programação, incentivando a troca 
          de ideias e a evolução contínua no mundo da tecnologia.
        </p>
      </section>
    </main>
    <Footer/>
    </>
  );
}
