const prompt = require('prompt-sync')()

let frase = prompt("Digite a frase: ")

let arrayFrase = frase.trim().split(" ")

console.log(arrayFrase.length - 1 )