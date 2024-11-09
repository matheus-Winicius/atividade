const prompt = require('prompt-sync')();

let ms = parseFloat(prompt("Forneça uma velocidade em m/s:"));

let kmh = ms * 3.6;

console.log("A velocidade transferida para km/h é: " + kmh.toFixed(2) + " km/h");
