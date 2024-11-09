const prompt = require('prompt-sync')();
let rendaMensal = parseFloat(prompt("Informe sua renda mensal:"));

let valorEmprestimo = parseFloat(prompt("Informe o valor total do empréstimo solicitado:"));

let numPrestacoes = parseInt(prompt("Informe o número de prestações desejado:"));

let valorPrestacao = valorEmprestimo / numPrestacoes;

let criterioValorEmprestimo = valorEmprestimo <= 10 * rendaMensal;
let criterioValorPrestacao = valorPrestacao <= 0.3 * rendaMensal;

if (criterioValorEmprestimo && criterioValorPrestacao) {
    console.log("Empréstimo pode ser concedido.");
} else {
    console.log("Empréstimo não pode ser concedido.");
}
