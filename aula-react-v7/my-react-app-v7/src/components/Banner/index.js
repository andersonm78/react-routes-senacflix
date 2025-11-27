import { NavLink, useLocation } from 'react-router-dom';
import styles from './Banner.module.css';
import { useState } from 'react';

function Banner({ onSearch }) {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const isWatchPage = location.pathname === '/watch';

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <section className={styles.banner}>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>🏠 Home</NavLink>
        <NavLink to="/watch" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>🎬 Watch</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>ℹ️ About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>📞 Contact</NavLink>

        {/* ✅ Campo de busca e botão Limpar só aparecem na página Watch */}
        {isWatchPage && (
          <>
            <input
              type="text"
              placeholder="Buscar filme..."
              value={query}
              onChange={handleInputChange}
              className={styles.search}
            />
            <button onClick={handleClear} className={styles.clearButton}>Limpar</button>
          </>
        )}
      </nav>
    </section>
  );
}

export default Banner;