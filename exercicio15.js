const prompt = require('prompt-sync')();
let populacaoA = 5000000;
let populacaoB = 7000000;
let taxaCrescimentoA = 0.03;
let taxaCrescimentoB = 0.02;
let anos = 0;

while (populacaoA <= populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}
console.log(`O país A ultrapassará o país B em população em ${anos} anos.`);
