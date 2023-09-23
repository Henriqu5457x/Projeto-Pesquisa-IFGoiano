function criarProduto(Nome, Preço) {
    return {
        Nome: Nome,
        Preço: Preço,
        exibirDetalhes() {
            console.log(`O ${this.Nome} está custando ${this.Preço}`);
        }
    };
}

const Produto2 = criarProduto("Notebook", 1499);
const Produto1 = criarProduto("Caderno", 400);
const Produto3 = criarProduto("Mesas", 500);

Produto1.exibirDetalhes();
Produto2.exibirDetalhes();
Produto3.exibirDetalhes()