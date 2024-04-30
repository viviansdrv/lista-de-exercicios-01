const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

celsius = parseFloat(celsius);

let fahrenheit = celsius * (9 / 5) + 32;
console.log(celsius);

console.log(`A temperatura em Fahrenheit é: ${fahrenheit} ºF`);

