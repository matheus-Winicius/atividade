const prompt = require('prompt-sync')();
let valorVenda = parseFloat(prompt("Digite seu valor de venda no mês:"));

let salario = 1200;

let salarioFinal = salario + (valorVenda * 0.15);

console.log("Seu salário no mês é " + salarioFinal.toFixed(2));

