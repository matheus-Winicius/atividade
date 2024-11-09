const prompt = require('prompt-sync')();
let idade = parseInt(prompt("Informe sua Idade atual:"));


if (idade >= 18 && idade <= 65) {
    console.log("Eleitor Obrigatório");
} else if ((idade >= 16 && idade < 18) || idade > 65) {
    console.log("Eleitor Facultativo");
} else {
    console.log("Não é Eleitor");
}
