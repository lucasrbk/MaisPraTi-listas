/* Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const prompt = require('prompt-sync')();

// Recebe a nota do usuário
const nota = parseFloat(prompt("Digite a nota (0 a 10):"));

// Verifica a classificação da nota
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 3) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}