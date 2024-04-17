//Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:

/* Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question("Digite o primeiro número: ", (num1) => {
    num1 = parseInt(num1);
    num1 = num1 + 25;
    rl.question("Digite o segundo número: ", (num2) => {
        num2 = parseInt(num2);
        num2 = num2 * 3;
        rl.question("Digite o terceiro número: ", (num3) => {
            num3 = parseInt(num3);
            num3 = num3 * 0.12;
            rl.question("Digite o quarto número: ", (num4) => {
                num4 = parseInt(num4);
                num4 = num1 + num2 + num3;
                console.log("O resultado final do primeiro número é: " + num1);
                console.log("O resultado final do segundo número é: " + num2);
                console.log("O resultado final do terceiro número é: " + num3);
                console.log("O resultado final do quarto número é: " + num4);
                rl.close();
            });
        });
    });
});