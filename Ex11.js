const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarParImpar(valor) {
    if (valor % 2 === 0) {
        console.log(valor + " é PAR");
    } else {
        console.log(valor + " é ÍMPAR");
    }
}

function lerProximoValor() {
    rl.question("Digite um valor inteiro (ou '0' para sair): ", (input) => {
        const valor = parseInt(input);

        if (valor <= 0) {
            console.log("Programa encerrado.");
            rl.close();
            return;
        }

        verificarParImpar(valor);

        // Chama a função novamente para ler o próximo valor
        lerProximoValor();
    });
}

// Inicia o processo de leitura do primeiro valor
lerProximoValor();
