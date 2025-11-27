import React from 'react';
import styles from './Cards.module.css';

function Cards({ filme, onSelect }) {
  const handleClick = () => {
    if (typeof onSelect === 'function') {
      onSelect(filme.url.split('v=')[1]); // extrai o ID do YouTube da URL
    }
  };

  return (
    <div className={styles.cardWrapper} onClick={handleClick}>
      <div className={styles.card}>
        <img src={filme.imagem} alt={filme.nome} />
      </div>
      <p className={styles.titulo}>{filme.nome}</p>
    </div>
  );
}

export default Cards;