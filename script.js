
let livros = [];

function adicionarLivro() {

    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;

    if (nome === "" || categoria === "") {
        alert("Preencha todos os campos!");
        return;
    }

    livros.push({
        nome: nome,
        categoria: categoria
    });

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    livros.forEach(function(livro) {

        let item = document.createElement("li");

        item.textContent = livro.nome + " - " + livro.categoria;

        lista.appendChild(item);

    });

    document.getElementById("nome").value = "";
    document.getElementById("categoria").value = "";
}
