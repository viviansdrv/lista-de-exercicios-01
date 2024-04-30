const prompt = require('prompt-sync')();

let numeros = [];

for (let n = 1; n <=4; n++ ) {
    let numero = parseInt(prompt(`Digite o ${n}º número: `));
    numeros.push(numero)
}

// somar 25 ao primeiro
let soma = numeros[0] + 25;
// triplicar valor do segundo inteiro
let triplicar = numeros[1] * 3;
//modificar valor o terceiro pra 12%
let porcento12 = numeros[2] * 0.12;
//alterar o quarto número com a soma dos anteriores
numeros[3] = (numeros[0] + numeros[1] + numeros[2]);



//resultados
console.log(soma);
console.log(triplicar);
console.log(porcento12);
console.log(`Soma dos 3 primeiros números digitados: ${numeros[3]}`);

