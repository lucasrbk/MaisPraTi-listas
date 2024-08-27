const prompt = require('prompt-sync')();

/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const quantidadeMacas = prompt('Digite o número de maçãs compradas: ');

let valorTotal;

if (quantidadeMacas < 12) {
    valorTotal = quantidadeMacas * 0.30;
} else {
    valorTotal = quantidadeMacas * 0.25;
}

console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`);
