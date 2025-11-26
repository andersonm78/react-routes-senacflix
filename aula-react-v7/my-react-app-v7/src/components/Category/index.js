import React, { useRef } from 'react';
import styles from './Category.module.css';
import Cards from '../Cards';

function Category({ titulo, filmes, busca, onSelect }) {
  const scrollRef = useRef();

  const filmesFiltrados = filmes.filter((filme) =>
    filme.nome.toLowerCase().includes(busca?.toLowerCase() || '')
  );

  if (!filmesFiltrados.length) return null;

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });
    }
  };

  const mostrarSetas = !busca && filmesFiltrados.length > 2;

  return (
    <section className={styles.categoria}>
      <h2 className={styles.tituloCategoria}>{titulo}</h2>

      <div className={styles.carrosselWrapper}>
        {/* ✅ Só mostra as setas se NÃO houver busca e houver mais de 2 filmes */}
        {mostrarSetas && (
          <button className={`${styles.navButton} ${styles.left}`} onClick={() => scroll('left')}>‹</button>
        )}

        <div className={styles.listaFilmes} ref={scrollRef}>
          {filmesFiltrados.map((filme) => (
            <Cards key={filme.id} filme={filme} onSelect={onSelect} />
          ))}
        </div>

        {mostrarSetas && (
          <button className={`${styles.navButton} ${styles.right}`} onClick={() => scroll('right')}>›</button>
        )}
      </div>
    </section>
  );
}

export default Category;