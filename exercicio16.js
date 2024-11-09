const prompt = require('prompt-sync')();
let indicesPluviometricos = [];

for (let dia = 1; dia <= 30; dia++) {
    let indice = parseFloat(prompt(`Informe o índice pluviométrico do dia ${dia}:`));
    indicesPluviometricos.push(indice);
}
let diaMaisChuva = indicesPluviometricos.indexOf(Math.max(...indicesPluviometricos)) + 1;

let diaMenosChuva = indicesPluviometricos.indexOf(Math.min(...indicesPluviometricos)) + 1;


