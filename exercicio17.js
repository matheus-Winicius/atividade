const prompt = require('prompt-sync')();
let vetor = [];

for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt(`Informe o número para a posição ${i + 1}:`));
    vetor.push(numero);
}

let valorProcurado = parseInt(prompt("Informe o valor a ser buscado:"));


let ocorrencias = vetor.filter(num => num === valorProcurado).length;

console.log(`O valor ${valorProcurado} ocorre ${ocorrencias} vez(es) no vetor.`);
