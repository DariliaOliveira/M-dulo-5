const readline = require('readline-sync');

function cadastro() {
    const nome = readline.question('Informe seu nome: ');
    const idade = parseInt(readline.question('Informe sua idade: '));

    try {
        if (nome.trim() !== '' && idade.trim() !== '' && !isNaN(idade) && Number.isInteger(idade)) {
            console.log('Cadastro realizado com sucesso!');
        } else {
            console.log('Dados inválidos.');
        }
    } catch (error) {
        console.error('\nErro ao cadastrar:', error);
    } finally {
        console.log('Finalizando o cadastro.');
    }
}

cadastro();