/*Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

const clientes = [
    { nome: 'Lucas', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'João', idade: 35, cidade: 'Belo Horizonte' }
];

let cont = 0;

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        cont++;
    }
});

console.log("Total de clientes com mais de 30 anos: " + cont);  