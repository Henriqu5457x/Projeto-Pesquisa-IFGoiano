class Pessoa {
    // Atributo público
    constructor(nome) {
      this.nome = nome; // Atributo público
      this.#idade = 0; // Atributo privado com campo privado
    }
  
    // Getter para o atributo privado idade
    get idade() {
      return this.#idade;
    }
  
    // Setter para o atributo privado idade com validação
    set idade(novaIdade) {
      if (novaIdade >= 0 && novaIdade <= 120) {
        this.#idade = novaIdade;
      } else {
        console.log("Idade inválida");
      }
    }
  }
  
  const pessoa1 = new Pessoa("João");
  
  // Acessando o atributo público diretamente
  console.log(pessoa1.nome); // Saída: João
  
  // Usando o getter para acessar o atributo privado
  console.log(pessoa1.idade); // Saída: 0
  
  // Usando o setter para modificar o atributo privado com validação
  pessoa1.idade = 30;
  console.log(pessoa1.idade); // Saída: 30
  
  // Tentando definir uma idade inválida
  pessoa1.idade = 150; // Saída: "Idade inválida"
  console.log(pessoa1.idade); // Saída: 30 (idade não foi modificada devido à validação)
  