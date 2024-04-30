const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Digite o valor de A: "));
let b = parseFloat(prompt("Digite o valor de B: "));
let c = parseFloat(prompt("Digite o valor de C: "));

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("É um triângulo equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("É um triângulo isósceles");
    } else {
        console.log("Ë um triângulo escaleno");
    }
} else {
    console.log("Não é um triângulo");
}


