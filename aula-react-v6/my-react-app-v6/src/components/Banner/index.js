// src/components/Banner/index.js
import { NavLink } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner() {
  return (
    <section className={styles.banner}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          🏠 Home
        </NavLink>
        <NavLink
          to="/watch"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          🎬 Watch
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          ℹ️ About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          📞 Contact
        </NavLink>
      </nav>
    </section>
  );
}

export default Banner;