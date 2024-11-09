const prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Informe um salário:"));

let desconto = salario * 0.11;

if (desconto > 334.29) {
    console.log("Valor máximo de desconto foi atingido");
} else {
    console.log("O seu desconto previdenciário é: R$ " + desconto.toFixed(2));
}

