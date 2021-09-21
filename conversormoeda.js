function Converter() {
     
    var valor1 = document.getElementById("valor")
    var valor_1 = valor1.value
    var valor_11 = parseFloat(valor_1)

    var valorFinal = valor_11 * 5.30
     
    console.log(valorFinal)

    var elementomoedaFinal= document.getElementById ("moedaFinal")

    
    var valorFinal1 = "O valor correspondente em reais é de R$" + valorFinal

    elementomoedaFinal.innerHTML = valorFinal1
}
