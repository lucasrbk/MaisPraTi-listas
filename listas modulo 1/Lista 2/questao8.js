/*Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

const filmes = [
    { titulo: "A casa monstro", diretor: "Gil Kenan", anoLancamento: 2006 },
    { titulo: "Hotel Transilvânia 2", diretor: "Genndy Tartakovsky", anoLancamento: 2015 },
    { titulo: "Os incriveis", diretor: "Brad Bird", anoLancamento: 2004 },
];

const titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);