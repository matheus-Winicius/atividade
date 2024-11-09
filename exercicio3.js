const prompt = require('prompt-sync')();
let salario = parseFloat(prompt("Seja Bem Vindo ao Banco de Empréstimo do Brasil!\n\nPara começar, informe seu salário mensal:"));

let prestacao = parseFloat(prompt("Agora informe o valor da sua prestação:"));

if (prestacao > salario * 0.2) {
    console.log("Empréstimo não concedido");
} else {
    console.log("Parabéns, seu empréstimo foi concedido!");
}
