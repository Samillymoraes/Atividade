const prompt = require('prompt-sync')()

let nome = prompt("Digite seu nome completo: ")

let arrayNome = nome.split(" ").reverse()

console.log(arrayNome[0], arrayNome[2], arrayNome[1])