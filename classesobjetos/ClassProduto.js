//classe Produto
class Produto {
    constructor(nome, preço) {
      this.nome = nome;
      this.preço = preço;
    }
    exibirDetalhes() {
        console.log(`O ${this.nome} está custando ${this.preço.toFixed(2)}`);
      }
    }

//pode ser tando o metodo anterior ou esse metodo 
//exibirDetalhes() {console.log(`Nome: ${this.nome}, Preço: ${this.preço}`);}
//a diferença é que o metodo anterior formata um número decimal com duas
//casas decimais após o ponto, permitindo especificar o número desejado de casas decimais.

  const Produto1 = new Produto("Celular", 999);
  const produto2 = new Produto("Carregador", 300);

    
  Produto1.exibirDetalhes();
  produto2.exibirDetalhes(); 



  
  