const prompt = require('prompt-sync')();

/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/

// Ler os valores dos lados do triângulo
const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

// Verificar se os lados formam um triângulo
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    // Verificar o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("O triângulo é equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.");
}