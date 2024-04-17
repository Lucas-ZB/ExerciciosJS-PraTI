//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question("Digite o número de maçãs compradas: ", (macas) => {
    macas = parseInt(macas);
    if (macas < 12) {
        console.log("O valor total da compra é: R$ " + (macas * 0.30).toFixed(2));
    }
    else {
        console.log("O valor total da compra é: R$ " + (macas * 0.25).toFixed(2));
    }
    rl.close();
});