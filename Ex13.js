//Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
//calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
//1 x N = N
//2 x N = 2N
//3 x N = 3N

const readline = require('readline-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num = 0;

for (let i = 0; i < 5; i++) {
    num = rl.question('Digite um número: ');

    for (let j = 1; j <= num; j++) {
        console.log(`${j} x ${num} = ${j * num}`);
    }
}

