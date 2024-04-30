const prompt = require('prompt-sync')();

let numerosDecimais; 
let soma = 0;
let pesoSoma = 0;
let mediaPonderada;
let peso;

while (true) {
    numerosDecimais = parseFloat(prompt("Digite um número decimal: ")); 

    if (numerosDecimais === 0) { 
        console.log("Finalizado.")
        break; 
    } else {
        peso = parseFloat(prompt("Digite o peso: ")); 
        soma += numerosDecimais * peso; 
        pesoSoma += peso; 
    }
}
mediaPonderada = soma / pesoSoma;
console.log(`A média dos números digitados é ${mediaPonderada}`);