// Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const readlineSync = require('readline-sync');

let num = 0;
let weight = 0;
let sum = 0;
let sumWeight = 0;

console.log("Digite números decimais e seus respectivos pesos. Digite '0' para sair.");

while (true) {
    num = parseFloat(readlineSync.question('Digite um número: '));

    if (num === 0) {
        break;
    }

    weight = parseFloat(readlineSync.question('Digite o peso do número: '));

    sum += num * weight;
    sumWeight += weight;
}

if (sumWeight === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    console.log(`A média ponderada dos números digitados é: ${sum / sumWeight}`);
}

