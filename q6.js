const prompt = require("prompt-sync")();

var palavra1 = prompt("Digite a primeira palavra: ")
var palavra2 = prompt("Digite a segunda palavra: ")

var anagrama1 = palavra1.split('').sort().join('');
var anagrama2 = palavra2.split('').sort().join('');

if (anagrama1 === anagrama2){
    console.log("As palavras " +palavra1+ " e " +palavra2+ " são um anagrama")
} else{
    console.log ("As palavras não são um anagrama!")
}


