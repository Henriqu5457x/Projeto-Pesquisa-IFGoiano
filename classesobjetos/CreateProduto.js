const produtoProto = {
    exibirDetalhes() {
      console.log(`O ${this.nome} está custando ${this.preço}`);
    }
  };
  
  const produto3 = Object.create(produtoProto);
  produto3.nome = "Fone de Ouvido";
  produto3.preço = 99;
  produto3.exibirDetalhes();
  