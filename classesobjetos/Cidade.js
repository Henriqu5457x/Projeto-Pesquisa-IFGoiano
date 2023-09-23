// Utilizando uma Classe (ES6)
class Cidade {
  constructor(nome, populacao) {
    this.nome = nome;
    this.populacao = populacao;
  }
  exibirDetalhes() {
    console.log(`A cidade de ${this.nome} tem ${this.populacao} habitantes`);
  }
}
const cidade1 = new Cidade("Nova York", 8.4e6);


// Utilizando uma Factory Function
function criarCidade(nome, populacao) {
  return {
    nome,
    populacao,
    exibirDetalhes() {
      console.log(`A cidade de ${this.nome} tem ${this.populacao} habitantes`);
    }
  };
}
const cidade2 = criarCidade("Paris", 2.2e6);


// Utilizando Object.create
const cidadeProto = {
  exibirDetalhes() {
    console.log(`A cidade de ${this.nome} tem ${this.populacao} habitantes`);
  }
};
const cidade3 = Object.create(cidadeProto);
cidade3.nome = "Tóquio";
cidade3.populacao = 13.9e6; 
//A linha de código "cidade3.populacao = 13.9e6;" atribui um valor de 13.9 milhões 
//à propriedade "populacao" do objeto "cidade3", representando a população da cidade de Tóquio.

cidade1.exibirDetalhes();
cidade2.exibirDetalhes();
cidade3.exibirDetalhes();
