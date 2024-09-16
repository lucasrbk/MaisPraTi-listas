/*Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos. */

const vendas = [
    { produto: 'Arroz', quantidade: 10, valor: 10 },
    { produto: 'Feijão', quantidade: 20, valor: 20 },
    { produto: 'Carne', quantidade: 30, valor: 30 }
];

let totalVendas = 0;

vendas.forEach(venda => {
    totalVendas += venda.quantidade * venda.valor;
});

console.log("Total de vendas: " + totalVendas);