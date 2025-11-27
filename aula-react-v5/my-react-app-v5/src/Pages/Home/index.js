import styles from "./Home.module.css";
import imagemSenacFlix from "../../assets/imagem-senacflix2.png";

function Home() {
  return (
    <div className={styles.home}>
      <img
        src={imagemSenacFlix}
        alt="SenacFlix - S vermelho sobre fundo retrô"
        className={styles.imagem}
      />
    </div>
  );
}

export default Home;