/*Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

const produtos = [
    { nome: 'Arroz', preco: 10, desconto: 0.1 },
    { nome: 'Feijão', preco: 20, desconto: 0.1 },
    { nome: 'Carne', preco: 30, desconto: 0.1 }];


produtos.forEach(produto => {
    console.log("Preço do(a) "+ produto.nome + " antes do desconto: " + produto.preco);
    produto.preco -= produto.preco * produto.desconto;
    console.log("Preço depois do desconto: " + produto.preco);
});