//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question("Digite um número inteiro: ", (numero) => {
    numero = parseInt(numero);
    for (let i = 1; i <= 10; i++) {
        console.log(numero);
    }
    rl.close();
});
