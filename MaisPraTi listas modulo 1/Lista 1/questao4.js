/* Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')();

console.log("Escolha uma opção:");
console.log("1. Opção 1");
console.log("2. Opção 2");
console.log("3. Opção 3");

const opcao = parseInt(prompt("Digite o número da opção desejada:"));

switch (opcao) {
    case 1:
        console.log("Você escolheu a opção 1");
        // Lógica da opção 1
        break;
    case 2:
        console.log("Você escolheu a opção 2");
        // Lógica da opção 2
        break;
    case 3:
        console.log("Você escolheu a opção 3");
        // Lógica da opção 3
        break;
    default:
        console.log("Opção inválida");
        break;
}
