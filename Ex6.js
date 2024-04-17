//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question("Digite o valor do lado A: ", (ladoA) => {
    ladoA = parseFloat(ladoA);
    rl.question("Digite o valor do lado B: ", (ladoB) => {
        ladoB = parseFloat(ladoB);
        rl.question("Digite o valor do lado C: ", (ladoC) => {
            ladoC = parseFloat(ladoC);
            if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
                if (ladoA == ladoB && ladoB == ladoC) {
                    console.log("Triângulo Equilátero");
                }
                else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
                    console.log("Triângulo Isósceles");
                }
                else {
                    console.log("Triângulo Escaleno");
                }
            }
            else {
                console.log("Os valores fornecidos não formam um triângulo");
            }
            rl.close();
        });
    });
});
