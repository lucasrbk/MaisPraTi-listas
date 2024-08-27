/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

const prompt = require('prompt-sync')();

// Recebe o número do usuário
const numero = parseInt(prompt("Digite um número:"));

// Exibe a tabuada do número
console.log(`Tabuada de multiplicação do ${numero}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
console.log(`Tabuada de soma do ${numero}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} + ${i} = ${numero + i}`);
}
console.log(`Tabuada de subtração do ${numero}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} - ${i} = ${numero - i}`);
}
console.log(`Tabuada de divisão do ${numero}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} % ${i} = ${(numero / i).toFixed(2)}`);
}


