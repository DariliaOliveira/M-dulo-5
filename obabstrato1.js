class ContaBancaria {
    constructor(numeroConta, titular) {
      this.numeroConta = numeroConta;
      this.titular = titular;
      this.saldo = 0;
    }
  
    depositar(valor) {
      this.saldo += valor;
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo da conta ${this.numeroConta}: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  // Exemplo de uso do objeto Conta Bancária (abstrato)
  const minhaConta = new ContaBancaria("0289", "Fulano");
  minhaConta.depositar(15000);
  minhaConta.consultarSaldo();
  minhaConta.sacar(250);
  minhaConta.consultarSaldo();