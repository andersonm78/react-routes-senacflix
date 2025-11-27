import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img
                    src="/images/logo-senacflix.png"
                    alt="Logo SenacFlix"
                    className={styles.logo}
                />
            </div>
            <h1 className={styles.title}>O Melhor Portal de Filmes!</h1>
        </header>
    );
}

export default Header;