class ContaBancaria {
    #saldo;
    #titular;
  
    constructor(titular) {
      this.#saldo = 0;
      this.#titular = titular;
    }
  
    getSaldo() {
      return this.#saldo;
    }
  
    getTitular() {
      return this.#titular;
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
      } else {
        console.log("O valor do depósito deve ser maior que zero.");
      }
    }
  
    sacar(valor) {
      if (valor > 0) {
        if (valor <= this.#saldo) {
          this.#saldo -= valor;
          console.log(`Saque de R$${valor} realizado com sucesso. Novo saldo:`);
        } else {
          console.log("Saldo insuficiente para realizar o saque.");
        }
      } else {
        console.log("O valor do saque deve ser maior que zero.");
      }
    }
  
    transferir(destino, valor) {
      if (valor > 0) {
        if (valor <= this.#saldo) {
          this.#saldo -= valor;
          destino.depositar(valor);
          console.log(`Transferência de R$${valor} para ${destino.getTitular()} realizada com sucesso.`);
        } else {
          console.log("Saldo insuficiente para realizar a transferência.");
        }
      } else {
        console.log("O valor da transferência deve ser maior que zero.");
      }
    }
  }
  
  const minhaConta = new ContaBancaria("Henrique");
  console.log(`Saldo Inicial de ${minhaConta.getTitular()}: R$${minhaConta.getSaldo()}`);
  
  minhaConta.depositar(1000);
  console.log(`Saldo após depósito: R$${minhaConta.getSaldo()}`);
  
  minhaConta.sacar(500);
  console.log(`Saldo após saque: R$${minhaConta.getSaldo()}`);
  
  const outraConta = new ContaBancaria("Silva");
  minhaConta.transferir(outraConta, 200);
  console.log(`Saldo após transferência: R$${minhaConta.getSaldo()}`);
  console.log(`Saldo da conta de ${outraConta.getTitular()}: R$${outraConta.getSaldo()}`);
  