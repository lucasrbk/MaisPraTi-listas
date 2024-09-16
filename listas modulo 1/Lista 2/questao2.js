/* Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto. */ 

const livro = {
    titulo: "Harry Potter",
    autor: "J.K. Rowling",
    anoPublicacao: 1997,
    genero: "Fantasy"
};

for (let propriedade in livro) {
    if (propriedade === "editora") {
        console.log("A propriedade editora já existe no objeto livro.");
    }else{
        console.log("A propriedade editora não existe no objeto livro.");
        livro.editora = "Editora XYZ";
    }
}

console.log(livro);
