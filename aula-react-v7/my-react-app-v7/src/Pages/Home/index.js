import styles from "./Home.module.css";
import cartazes from "../../data/cartazes"; // Supondo que você tenha um array de imagens

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {cartazes.map((cartaz, index) => (
            <img
              key={index}
              src={cartaz.src}
              alt={cartaz.alt}
              className={styles.poster}
            />
          ))}
          {/* Repetição para efeito contínuo */}
          {cartazes.map((cartaz, index) => (
            <img
              key={`repeat-${index}`}
              src={cartaz.src}
              alt={cartaz.alt}
              className={styles.poster}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;