/*Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

let pedidos = [
    {cliente: 'João', produto: 'Camisa', quantidade: 2},
    {cliente: 'Maria', produto: 'Calça', quantidade: 1},
    {cliente: 'João', produto: 'Boné', quantidade: 3},
    {cliente: 'Mario', produto: 'Camisa', quantidade: 1},
];

let agruparPedidos = {};

pedidos.forEach(pedido => {
    if (!agruparPedidos[pedido.cliente]) {
        agruparPedidos[pedido.cliente] = 0;
    }
    agruparPedidos[pedido.cliente] += pedido.quantidade;
}
);

console.log(agruparPedidos);
