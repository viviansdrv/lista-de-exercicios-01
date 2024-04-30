const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Digite o 1º número: "));
let numero2 = parseInt(prompt("Digite o segundo número: "));
let armazenar;

while (numero2 === numero1) {
    console.log("O segundo número não pode ser igual ao primeiro. Digite novamente!")
    numero2 = parseInt(prompt("Digite o segundo numéro: "));
}

if (numero1 > numero2) {
    console.log(`Valores em ordem crescente: ${numero1}, ${numero2}`);
} else {
    console.log(`Valores em ordem crescente: ${numero2}, ${numero1}`);
}