const prompt = require("prompt-sync")();

var a = Number(prompt("Informe o valor de a: "));
var b = Number(prompt("Informe o valor de b: "));
var c = Number(prompt("Informe o valor de c: "));

var delta = (b**2) - (4*a*c);

var x1 = (-b + Math.sqrt(delta))/(2*a);
var x2 = (-b - Math.sqrt(delta))/(2*a);

