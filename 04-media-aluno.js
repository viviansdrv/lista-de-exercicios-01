const prompt = require('prompt-sync')();


let nota1 = parseFloat(prompt("Digite a 1º nota: "));
let nota2 = parseFloat(prompt("Digite a 2º nota: "));

let media = (nota1 + nota2) / 2;
console.log(`Média: ${media}`);

if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado");
}

