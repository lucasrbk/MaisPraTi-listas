const prompt = require('prompt-sync')();

/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

// Ler os valores
const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));

// Verificar a ordem dos valores
if (valor1 < valor2 && valor1 !== valor2) {
    console.log(`Os valores em ordem crescente são ${valor1} e ${valor2}.`);
} else if (valor1 > valor2 && valor1 !== valor2){
    console.log(`Os valores em ordem crescente são ${valor2} e ${valor1}.`);
}else{
    console.log("Os valores são iguais.");
}