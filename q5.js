const prompt = require("prompt-sync")();

var palavra = prompt("Digite a palavra: ")

var palavraInversa = palavra.split('').reverse().join('');

if (palavra === palavraInversa){
    console.log("Essa palavra é um palindromo!")
} else{
    console.log("A palavra " +palavra+ 
        " não é um palindromo, o seu inverso é " +palavraInversa)
}

