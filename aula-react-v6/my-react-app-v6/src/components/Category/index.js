import React, { useRef } from 'react';
import styles from './Category.module.css';
import Cards from '../Cards';

function Category({ titulo, filmes, busca, onSelect }) {
  const filmesFiltrados = filmes.filter((filme) =>
    filme.nome.toLowerCase().includes(busca?.toLowerCase() || '')
  );

  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.categoria}>
      {/* ✅ Aplica a classe corretamente */}
      <h2 className={styles.tituloCategoria}>{titulo}</h2>

      <div className={styles.carrosselWrapper}>
        <button className={`${styles.navButton} ${styles.left}`} onClick={() => scroll('left')}>‹</button>
        <div className={styles.listaFilmes} ref={scrollRef}>
          {filmesFiltrados.map((filme) => (
            <Cards key={filme.id} filme={filme} onSelect={onSelect} />
          ))}
        </div>
        <button className={`${styles.navButton} ${styles.right}`} onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  );
}

export default Category;