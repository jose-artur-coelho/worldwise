import PageNav from "../../components/PagNav";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h2>
            Preço único.
            <br />
            Apenas R$9 por mês.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
