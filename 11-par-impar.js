const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro: "));


while (numero > 0) {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par`);
    } else {
        console.log(`O número ${numero} é impar`);
    }
    numero = parseInt(prompt("Digite um número inteiro: "));
}
console.log("Finalizado.")