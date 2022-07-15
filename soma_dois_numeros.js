/* soma de dois numeros */

var numero1 = parseFloat(prompt("Digite o primeiro número"))
var numero2 = parseFloat(prompt("Digite o segundo número"))

var resultado = somar(numero1,numero2);
console.log(resultado);

function somar(numero1,numero2) {
    return numero1 + numero2;
}