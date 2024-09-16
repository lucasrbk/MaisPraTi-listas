/*Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

const prompt = require('prompt-sync')();

// Recebe o número inteiro do usuário
const numero = parseInt(prompt("Digite um número inteiro:"));

// Escreve o número 10 vezes
for (let i = 0; i < 10; i++) {
    console.log(numero);
}