const prompt = require("prompt-sync")();

var kilos = Number(prompt("Digite seu peso: "));
var altura = Number(prompt("Digite sua altura: "));
var imc = kilos / (altura * altura);

console.log("Seu IMC é de :" +imc)
