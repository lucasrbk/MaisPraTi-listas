/*4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.*/

const pessoas = [
    { nome: 'Lucas', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'João', idade: 35, cidade: 'Belo Horizonte' }
];

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}