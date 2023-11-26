import Button from "../../components/Button";
import PageNav from "../../components/PagNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Você viaja o mundo.
          <br />
          WorldWise deixa o rastro da sua aventura.
        </h1>
        <h2>
          Relembre todos os lugares em que já pôs o pé no chão. Nunca esqueça
          suas maravilhosas experiências e mostre aos seus amigos suas jornadas.
        </h2>
        <Button path="/app" text="COMECE A ACOMPANHAR AGORA" />
      </section>
    </main>
  );
}
