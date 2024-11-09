const prompt = require('prompt-sync')();

function idadeEmDias(dataNascimento) 
{
    let nascimento = new Date(dataNascimento.split("/").reverse().join("-"));


    let hoje = new Date();


    let diferençaEmMillis = hoje - nascimento;

   
    let dias = Math.floor(diferençaEmMillis / 86400000);

    return dias;
}
let dataNascimento = prompt("Digite sua data de nascimento (dd/mm/aaaa):");

let dias = idadeEmDias(dataNascimento);

console.log(`Sua idade em dias é: ${dias} dias`);
