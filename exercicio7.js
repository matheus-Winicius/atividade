const prompt = require('prompt-sync')();
let precoFabrica = parseFloat(prompt("Informe o preço de fábrica do carro:"));

let impostos = precoFabrica * 0.45;
let revendedor = impostos + precoFabrica * 0.25;
let precoFinal = precoFabrica + impostos + revendedor;


console.log("O preço final do carro é " + precoFinal.toFixed(2) + " reais");
