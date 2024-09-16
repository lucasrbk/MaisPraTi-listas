/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let numero = 1;

while (numero !== 0) {
    numero = parseFloat(prompt("Digite um número para coninuar ou zero para sair:"));
    soma += numero;
    quantidade++;
}

const media = soma / (quantidade - 1);
console.log(`A média dos números é ${media}`);

