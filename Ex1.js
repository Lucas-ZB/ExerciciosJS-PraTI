// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Digite a temperatura em Celsius: ", (temp) => {
temp = parseFloat(temp);

temp = temp * 1.8 + 32;

console.log("A temperatura em Fahrenheit é: " + temp);

rl.close();

});