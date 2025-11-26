import React from 'react';
import styles from './Container.module.css';
import Category from '../Category';

function Container({ filtro, busca, onSelect }) {

    const filmesPorCategoria = [
        {
            titulo: '🎬Comédia',
            chave: 'comedia',
            filmes: [
                {
                    id: 1,
                    nome: 'Police Academy (1984)',
                    url: 'https://www.youtube.com/watch?v=4NT4C1F_HZE',
                    imagem: 'https://img.youtube.com/vi/4NT4C1F_HZE/hqdefault.jpg',
                },
                {
                    id: 2,
                    nome: 'Spaceballs (1987)',
                    url: 'https://www.youtube.com/watch?v=kGIM_yNzeUo',
                    imagem: 'https://img.youtube.com/vi/kGIM_yNzeUo/hqdefault.jpg',
                },
                {
                    id: 3,
                    nome: "National Lampoon's Vacation (1983)",
                    url: 'https://www.youtube.com/watch?v=FHThGmVfE3A',
                    imagem: 'https://img.youtube.com/vi/FHThGmVfE3A/hqdefault.jpg',
                },
                {
                    id: 4,
                    nome: 'Superman II (1980)',
                    url: 'https://www.youtube.com/watch?v=jxD8RlGnP64',
                    imagem: 'https://img.youtube.com/vi/jxD8RlGnP64/hqdefault.jpg',
                },
                {
                    id: 5,
                    nome: 'The Witches of Eastwick (1987)',
                    url: 'https://www.youtube.com/watch?v=mLs1y_KSTKk',
                    imagem: 'https://img.youtube.com/vi/mLs1y_KSTKk/hqdefault.jpg',
                },
                {
                    id: 6,
                    nome: 'Up The Academy (1980)',
                    url: 'https://www.youtube.com/watch?v=GETlgTdtT5M',
                    imagem: 'https://img.youtube.com/vi/GETlgTdtT5M/hqdefault.jpg',
                },
                {
                    id: 7,
                    nome: 'Caddyshack (1980)',
                    url: 'https://www.youtube.com/watch?v=x9Nl39uWEYk',
                    imagem: 'https://img.youtube.com/vi/x9Nl39uWEYk/hqdefault.jpg',
                },
                {
                    id: 8,
                    nome: 'Stir Crazy (1980)',
                    url: 'https://www.youtube.com/watch?v=1U1h0aYcXyQ',
                    imagem: 'https://img.youtube.com/vi/1U1h0aYcXyQ/hqdefault.jpg',
                },
            ],
        },
        {
            titulo: '🎬Terror',
            chave: 'terror',
            filmes: [
                {
                    id: 9,
                    nome: 'Friday the 13th (1980)',
                    url: 'https://www.youtube.com/watch?v=Xqqej9T2gqI',
                    imagem: 'https://img.youtube.com/vi/Xqqej9T2gqI/hqdefault.jpg',
                },
                {
                    id: 10,
                    nome: 'Halloween 4: The Return of Michael Myers (1988)',
                    url: 'https://www.youtube.com/watch?v=rfvBru3MKsg',
                    imagem: 'https://img.youtube.com/vi/rfvBru3MKsg/hqdefault.jpg',
                },
                {
                    id: 11,
                    nome: 'Hellraiser (1987)',
                    url: 'https://www.youtube.com/watch?v=8mOn4h0lgKQ',
                    imagem: 'https://img.youtube.com/vi/8mOn4h0lgKQ/hqdefault.jpg',
                },
                {
                    id: 12,
                    nome: 'Poltergeist (1982)',
                    url: 'https://www.youtube.com/watch?v=9eZgEKjYJqA',
                    imagem: 'https://img.youtube.com/vi/9eZgEKjYJqA/hqdefault.jpg',
                },
                {
                    id: 13,
                    nome: 'The Lost Boys (1987)',
                    url: 'https://www.youtube.com/watch?v=r1Iqy6m7U7c',
                    imagem: 'https://img.youtube.com/vi/r1Iqy6m7U7c/hqdefault.jpg',
                },
                {
                    id: 14,
                    nome: 'Creepshow 2 (1987)',
                    url: 'https://www.youtube.com/watch?v=Mj3QzNLWgbI',
                    imagem: 'https://img.youtube.com/vi/Mj3QzNLWgbI/hqdefault.jpg',
                },
                {
                    id: 15,
                    nome: 'The Shining (1980)',
                    url: 'https://www.youtube.com/watch?v=S014oGZiSdI&list=PLyuHnDzgJqLgdyykf-RD5dLZDr3HqQoSh&index=26',
                    imagem: 'https://img.youtube.com/vi/S014oGZiSdI/hqdefault.jpg',
                },
                {
                    id: 16,
                    nome: 'An American Werewolf in London (1981)',
                    url: 'https://www.youtube.com/watch?v=bRVH3z_erjA&list=PLyuHnDzgJqLgdyykf-RD5dLZDr3HqQoSh&index=19',
                    imagem: 'https://img.youtube.com/vi/bRVH3z_erjA/hqdefault.jpg',
                },
            ],
        },
        {
            titulo: '🎬Ação',
            chave: 'acao',
            filmes: [
                {
                    id: 17,
                    nome: 'Predator (1987)',
                    url: 'https://www.youtube.com/watch?v=_1wDBNHYDv8',
                    imagem: 'https://img.youtube.com/vi/_1wDBNHYDv8/hqdefault.jpg',
                },
                {
                    id: 18,
                    nome: 'RoboCop (1987)',
                    url: 'https://www.youtube.com/watch?v=6tC_5mp3udE',
                    imagem: 'https://img.youtube.com/vi/6tC_5mp3udE/hqdefault.jpg',
                },
                {
                    id: 19,
                    nome: 'Batman (1989)',
                    url: 'https://www.youtube.com/watch?v=dgC9Q0uhX70',
                    imagem: 'https://img.youtube.com/vi/dgC9Q0uhX70/hqdefault.jpg',
                },
                {
                    id: 20,
                    nome: 'Ghostbusters (1984)',
                    url: 'https://www.youtube.com/watch?v=6hDkhw5Wkas',
                    imagem: 'https://img.youtube.com/vi/6hDkhw5Wkas/hqdefault.jpg',
                },
                {
                    id: 21,
                    nome: 'Beverly Hills Cop (1984)',
                    url: 'https://www.youtube.com/watch?v=oc3sPICXZLs',
                    imagem: 'https://img.youtube.com/vi/oc3sPICXZLs/hqdefault.jpg',
                },
                {
                    id: 22,
                    nome: 'Airplane (1980)',
                    url: 'https://www.youtube.com/watch?v=07pPmCfKi3U',
                    imagem: 'https://img.youtube.com/vi/07pPmCfKi3U/hqdefault.jpg',
                },
                {
                    id: 23,
                    nome: 'Mad Max (1980)',
                    url: 'https://www.youtube.com/watch?v=pnfAa9i9LYM',
                    imagem: 'https://img.youtube.com/vi/pnfAa9i9LYM/hqdefault.jpg',
                },
                {
                    id: 24,
                    nome: 'Popeye (1980)',
                    url: 'https://www.youtube.com/watch?v=FXTyss9UAwM',
                    imagem: 'https://img.youtube.com/vi/FXTyss9UAwM/hqdefault.jpg',
                },
            ],
        },
    ];

    return (
        <div className={styles.container}>
        {filmesPorCategoria
            .filter((cat) => !filtro || cat.chave === filtro)
            .map((cat) => (
            <Category
                key={cat.titulo}
                titulo={cat.titulo}
                filmes={cat.filmes}
                busca={busca}
                onSelect={onSelect} // ✅ passa a função para abrir o modal
            />
            ))}
        </div>
    );
}

export default Container;