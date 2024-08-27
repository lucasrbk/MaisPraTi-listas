const prompt = require('prompt-sync')();

/* Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

// Peso em kg
const peso = parseFloat(prompt('Digite o seu peso em kg: '));

// Altura em metros
const altura = parseFloat(prompt('Digite a sua altura em metros: '));

// Cálculo do IMC
const imc = peso / (altura * altura);

// Determinação da categoria de peso
let categoria;

if (imc < 18.5) {
    categoria = "Baixo peso";
} else if (imc < 25) {
    categoria = "Peso normal";
} else if (imc < 30) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidade";
}

console.log(`Seu IMC é ${imc.toFixed(2)} e sua categoria de peso é ${categoria}.`);