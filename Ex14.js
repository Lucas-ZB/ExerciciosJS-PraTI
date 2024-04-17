const readlineSync = require('readline-sync');

let num = 0;
let sum = 0;
let count = 0;

console.log("Digite números decimais. Digite '0' para sair.");

while (true) {
    num = parseFloat(readlineSync.question('Digite um número: '));

    if (num === 0) {
        break;
    }

    sum += num;
    count++;
}

if (count === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    console.log(`A média aritmética dos números digitados é: ${sum / count}`);
}
