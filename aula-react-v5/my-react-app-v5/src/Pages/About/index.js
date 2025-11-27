// src/Pages/About/index.js
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o SenacFlix</h1>
            <p>
                O SenacFlix é uma plataforma de streaming dedicada aos amantes do cinema Cult, com foco especial nas produções marcantes dos anos 80. Criado com o propósito de valorizar o legado cinematográfico dessa década inesquecível, o SenacFlix reúne uma seleção cuidadosamente curada de filmes que marcaram gerações, influenciaram estilos e moldaram a cultura pop mundial.
            </p>
            <p>
                Mais do que apenas entretenimento, o SenacFlix é uma experiência nostálgica e educativa. A plataforma oferece aos usuários a oportunidade de revisitar clássicos que definiram gêneros como comédia, terror e ação, além de explorar obras que muitas vezes ficaram fora do circuito comercial, mas que possuem enorme valor artístico e histórico.
            </p>
            <p>
                Com uma interface intuitiva e visual retrô, o SenacFlix proporciona uma verdadeira viagem no tempo, permitindo que cinéfilos, estudantes e curiosos mergulhem no universo cinematográfico dos anos 80. Cada título disponível é acompanhado de informações sobre o contexto da época, curiosidades de bastidores e trailers originais, enriquecendo ainda mais a jornada do espectador.
            </p>
            <p>
                Seja para reviver memórias ou descobrir pérolas escondidas, o SenacFlix é o destino ideal para quem aprecia o cinema com personalidade, ousadia e autenticidade.
            </p>
        </div>
    );
}

export default About;