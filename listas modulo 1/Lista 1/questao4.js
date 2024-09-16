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
        console.log("Você escolheu a opção 1, ganhou um abraço");
        break;
    case 2:
        console.log("Você escolheu a opção 2, ganhou um churros");
        break;
    case 3:
        console.log("Você escolheu a opção 3, ganhou um hamburguer");
        break;
    default:
        console.log("Opção inválida");
        break;
}
