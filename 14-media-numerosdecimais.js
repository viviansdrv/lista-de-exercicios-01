const prompt = require('prompt-sync')();

let numerosDecimais; 
let soma = 0;
let contador = 0;
let media;

while (true) {
    numerosDecimais = parseFloat(prompt("Digite um número decimal: ")); 
    
    if (numerosDecimais === 0) { 
        console.log("Finalizado.")
        break; 
    } else {
        soma += numerosDecimais; 
        contador++; 
    }
}

media = soma / contador;
console.log(`A média dos números digitados é ${media}`);

