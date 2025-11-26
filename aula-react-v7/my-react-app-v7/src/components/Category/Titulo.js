import React from 'react';
import styles from './Titulo.module.css';

function Titulo({ texto }) {
    return <h2 className={styles.titulo}>{texto}</h2>;
}

export default Titulo;
