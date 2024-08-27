/* Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')();

// Recebe o número do usuário
const numero = parseInt(prompt("Digite um número:"));

// Calcula o fatorial do número
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);

