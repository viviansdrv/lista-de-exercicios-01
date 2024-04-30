const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Digite o total de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o total de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o total de votos nulos: "));
let votosValidos = parseInt(eleitores - votosBrancos - votosNulos);

console.log(`Total de votos válidos:  ${votosValidos}`);

let percentualBrancos = (votosBrancos / eleitores) * 100;
let percentualNulos = (votosNulos / eleitores) * 100;
let percentualValidos = (votosValidos / eleitores) * 100;

  console.log(`Votos brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`Votos nulos: ${percentualNulos.toFixed(2)}%`);
  console.log(`Votos válidos: ${percentualValidos.toFixed(2)}%`);

