const prompt = require('prompt-sync')();
let valorConsignado = 280000.0;
let entrada = 2500.0;

let jurosAno = 12 / 100;
let parcelas = 65;

let jurosMes = Math.pow(1 + jurosAno, 1/12) - 1;

let saldoDevedor = valorConsignado - entrada;


let valorParcela = saldoDevedor * (jurosMes * Math.pow(1 + jurosMes, parcelas)) / (Math.pow(1 + jurosMes, parcelas) - 1);

let valorTotalPago = valorParcela * parcelas + entrada;


console.log(`Valor total pago: R$ ${valorTotalPago.toFixed(2)}`);
