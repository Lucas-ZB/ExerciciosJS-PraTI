// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });


rl.question("Digite o 1º valor: ", (valor1) => {
    valor1 = parseFloat(valor1);
    rl.question("Digite o 2º valor: ", (valor2) => {
        valor2 = parseFloat(valor2);
        if (valor1 < valor2) {
            console.log("Os valores em ordem crescente são: " + valor1 + " e " + valor2);
        }
        else {
            console.log("Os valores em ordem crescente são: " + valor2 + " e " + valor1);
        }
        rl.close();
    });
});
