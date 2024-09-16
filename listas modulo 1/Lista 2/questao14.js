/*Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

let empresa = {
    departamentos: [
        {
            nome: 'RH',
            funcionarios: ['João', 'Maria', 'Ana']
        },
        {
            nome: 'TI',
            funcionarios: ['Pedro', 'Julia', 'Lucas']
        },
        {
            nome: 'Vendas',
            funcionarios: ['Marcos', 'Carla', 'Lucia']
        }
    ]
};

for (let departamento in empresa.departamentos) {
    console.log(`Departamento: ${empresa.departamentos[departamento].nome}`);
    for (let funcionario of empresa.departamentos[departamento].funcionarios) {
        console.log(`Funcionário: ${funcionario}`);
    }
}

