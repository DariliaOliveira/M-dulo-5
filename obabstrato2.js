class Calculadora {
    static somar(a, b) {
      return a + b;
    }
  
    static subtrair(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b === 0) {
        console.log("Erro: divisão por zero.");
        return undefined;
      }
      return a / b;
    }
  }
  
  // Exemplo de uso do objeto Calculadora (abstrato)
  console.log("Soma: " + Calculadora.somar(30, 5));
  console.log("Subtração: " + Calculadora.subtrair(30, 5));
  console.log("Multiplicação: " + Calculadora.multiplicar(30, 5));
  console.log("Divisão: " + Calculadora.dividir(30, 5));