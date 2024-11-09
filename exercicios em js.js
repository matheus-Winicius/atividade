const prompt = require('prompt-sync')();
let dolares = Number(prompt("Seja Bem Vindo a conversão cambial do Dólar para o Real\n\nDigite sua quantidade de Dólares: "));
let real = dolares * 5.50;
console.log("Você tem " + real.toFixed(2) + " reais");
