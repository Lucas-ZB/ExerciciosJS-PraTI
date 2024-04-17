//Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:

//  Código de Origem Região (1 - Sul; 2 - Norte; 3 - Leste; 4- Oeste )

const readline = require('readline');

const rl = readline.createInterface({   
    input: process.stdin,
    output: process.stdout
    });

rl.question("Digite o código de origem do produto: ", (codigo) => {
    codigo = parseInt(codigo);
    switch (codigo) {
        case 1:
            console.log("Sul");
            break;
        case 2:
            console.log("Norte");
            break;
        case 3:
            console.log("Leste");
            break;
        case 4:
            console.log("Oeste");
            break;
        default:
            console.log("Produto Importado");
    }
    rl.close();
}

);