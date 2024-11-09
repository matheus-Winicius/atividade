const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome:");

let idade = parseInt(prompt("Digite sua idade atual:"));

if (idade >= 18) {
    alert(nome + " sua entrada foi permitida");
} else {
    alert(nome + " sua entrada foi negada");
}
