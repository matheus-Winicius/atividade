const prompt = require('prompt-sync')();
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}


function classificarIMC(imc) {
    if (imc < 20) {
        return "Abaixo do peso";
    } else if (imc >= 20 && imc < 25) {
        return "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 40) {
        return "Obeso";
    } else {
        return "Obeso Mórbido";
    }
}

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));


let imc = calcularIMC(peso, altura);
let classificacao = classificarIMC(imc);


console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);
