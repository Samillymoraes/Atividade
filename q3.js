const prompt = require("prompt-sync")();

var a = Number(prompt("Digite o valor do lado a: "))
var b = Number(prompt("Digite o valor do lado b: "))
var c = Number(prompt("Digite o valor do lado c: "))

var Perimetro = a+b+c;
var s = (a+b+c)/2;  
var area = Math.sqrt(s*(s - a) * (s - b) * (s - c));

console.log(" O Perímetro é: " +Perimetro + " e a área é: " +area);
