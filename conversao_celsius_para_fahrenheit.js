/* Faça um programa, usando uma função que converta uma temperatura de Celsius para Fahrenheit. */

var numerocelsius = parseFloat(prompt("Escolha o número a ser convertido para Fahrenheit"));
var Fahrenheit = 0;
conversorCelsiusParaFahrenheit();
console.log(numerocelsius + "ºC equivale a " + Fahrenheit + "ºF");

function conversorCelsiusParaFahrenheit (){
   Fahrenheit = (numerocelsius * 1.8) + 32;
}