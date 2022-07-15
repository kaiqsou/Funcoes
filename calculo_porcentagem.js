/* Faça um programa, usando uma função, para calcular a porcentagem de um número.  */

var numerointeiro = parseInt(prompt("Digite um numero inteiro"));
var porcentagem = parseFloat(prompt("Escolha a porcentagem que deseja"));
var resultado = 0;
calculoporcentagem();
console.log(porcentagem + "% de " + numerointeiro + " é: " + resultado);

function calculoporcentagem(){
    resultado = numerointeiro * (porcentagem/100)
}