const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro: "));

for (let i = 1; i <= numero; i++) {
    console.log(`${numero} * ${i} = ${(i * numero)}`);
}