let primos = []; 
let numero = 101; 
let primo;


while (primos.length < 50) { 
    primo = true; 

    for (let divisor = 2; divisor <= numero / 2; divisor++) {
        if (numero % divisor === 0) { 
            primo = false; 
            break; 
        }
    }

    if (primo) {
        primos.push(numero); 
    }
    numero++; 
} 

console.log(`Números primos maiores que 100:\n ${primos}`);
