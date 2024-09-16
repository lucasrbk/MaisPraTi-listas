/* Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

const prompt = require('prompt-sync')();

// Inicializa as variáveis
let a = 0;
let b = 1;
let c;

// Imprime os dois primeiros números
console.log(a);
console.log(b);

// Calcula e imprime os próximos 8 números
for (let i = 2; i < 10; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}
