// Utilizando uma Classe (ES6)

//classe Produto
class Produto {
  constructor(nome, preço) {
    this.nome = nome;
     this.preço = preço;
  }
      exibirDetalhes() {
         console.log(`O ${this.nome} está custando ${this.preço}`);
    }
  }

//pode ser tando o metodo anterior ou esse metodo 
//exibirDetalhes() {console.log(`Nome: ${this.nome}, Preço: ${this.preço.toFixed(2)}`);}
//a diferença é que o metodo anterior formata um número decimal com duas
//casas decimais após o ponto, permitindo especificar o número desejado de casas decimais.
const Produto1 = new Produto("Celular", 999);
Produto1.exibirDetalhes();


// Utilizando uma Factory Function
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
Produto2.exibirDetalhes();

// Utilizando Object.create
const produtoProto = {
  exibirDetalhes() {
    console.log(`O ${this.nome} está custando ${this.preço}`);
  }
};

const produto3 = Object.create(produtoProto);
produto3.nome = "Fone de Ouvido";
produto3.preço = 99;
produto3.exibirDetalhes();

  
  