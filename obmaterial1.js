class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0;
      this.ligado = false;
    }
  
    ligar() {
      this.ligado = true;
      console.log(`O ${this.marca} ${this.modelo} foi ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      console.log(`O ${this.marca} ${this.modelo} foi desligado.`);
    }
  
    acelerar(velocidade) {
      if (this.ligado) {
        this.velocidade += velocidade;
        console.log(`O ${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h.`);
      } else {
        console.log(`Não é possível acelerar, o ${this.marca} ${this.modelo} está desligado.`);
      }
    }
  }
  
  // Exemplo de uso do objeto Carro
  const meuCarro = new Carro("Fiat", "Argo", 2022);
  meuCarro.ligar();
  meuCarro.acelerar(50);
  meuCarro.desligar();