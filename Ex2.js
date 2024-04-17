//Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question("Digite o número de eleitores: ", (eleitores) => {
    eleitores = parseInt(eleitores);
    rl.question("Digite o número de votos brancos: ", (brancos) => {
        brancos = parseInt(brancos);
        rl.question("Digite o número de votos nulos: ", (nulos) => {
            nulos = parseInt(nulos);
            rl.question("Digite o número de votos válidos: ", (validos) => {
                validos = parseInt(validos);
                let total = brancos + nulos + validos;
                let percentualBrancos = (brancos / total) * 100;
                let percentualNulos = (nulos / total) * 100;
                let percentualValidos = (validos / total) * 100;
                console.log("Percentual de votos brancos: " + percentualBrancos + " %");
                console.log("Percentual de votos nulos: " + percentualNulos + " %");
                console.log("Percentual de votos válidos: " + percentualValidos + " %");
                rl.close();
            });
        });
    });
});
