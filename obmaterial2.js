class Livro {
    constructor(titulo, autor, anoPublicacao, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
      this.paginas = paginas;
      this.aberto = false;
    }
  
    abrir() {
      this.aberto = true;
      console.log(`O livro "${this.titulo}" de ${this.autor} foi aberto.`);
    }
  
    fechar() {
      this.aberto = false;
      console.log(`O livro "${this.titulo}" de ${this.autor} foi fechado.`);
    }
  
    lerPagina() {
      if (this.aberto) {
        console.log(`Lendo a página do livro "${this.titulo}".`);
      } else {
        console.log(`Não é possível ler, o livro "${this.titulo}" está fechado.`);
      }
    }
  }
  
  // Exemplo de uso do objeto Livro
  const meuLivro = new Livro("O Manifesto do Partido Comunista", "Karl Marx, Friedrich Engels", 1848, 112);
  meuLivro.abrir();
  meuLivro.lerPagina();
  meuLivro.fechar();