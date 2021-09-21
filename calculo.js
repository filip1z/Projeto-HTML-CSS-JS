function Calcular() {
    

var primeiroValor = document.getElementById("valor1")
var primeiroValor1 = primeiroValor.value 
var primeiroValor_1 = parseFloat(primeiroValor1)


var segundoValor  = document.getElementById("valor2")
var segundoValor2 = segundoValor.value 
var segundoValor_2 = parseFloat(segundoValor2)



var terceiroValor = document.getElementById("valor3")
var terceiroValor3 = terceiroValor.value 
var terceiroValor_3 = parseFloat(terceiroValor3)



var quartoValor  = document.getElementById("valor4")
var quartoValor4 = quartoValor.value 
var quartoValor_4 = parseFloat(quartoValor4)



var valorFinal =  (primeiroValor_1 + segundoValor_2 + terceiroValor_3 + quartoValor_4) / 4

console.log(valorFinal)

var elementomediaFinal = document.getElementById("mediaFinal")

var mediaFinal = "A média dos números que você inseriu é " + valorFinal

elementomediaFinal.innerHTML = mediaFinal

}


