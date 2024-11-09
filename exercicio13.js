const prompt = require('prompt-sync')();
let caracter = prompt("Informe um caractere:");


if ('aeiou'.includes(caracter.toLowerCase())) {
    console.log("O caractere é uma vogal");
} 
else if ('bcdfghjklmnpqrstvwxyz'.includes(caracter.toLowerCase())) {
    console.log("O caractere é uma consoante");
} 

else if ('0123456789'.includes(caracter)) {
    console.log("O caractere é um número");
} 

else {
    console.log("O caractere é um símbolo especial");
}



