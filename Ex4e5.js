//Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
//calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
//aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
//aprovação).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

rl.question("Digite a nota da primeira avaliação: ", (nota1) => {
    nota1 = parseFloat(nota1);
    rl.question("Digite a nota da segunda avaliação: ", (nota2) => {
        nota2 = parseFloat(nota2);
        let media = (nota1 + nota2) / 2;
        console.log("A média semestral é: " + media);
        if (media >= 6.0) {
            console.log("PARABÉNS! Você foi aprovado");
        }
        else { console.log("Você foi reprovado! Estude Mais!"); }
        rl.close();
    });
});