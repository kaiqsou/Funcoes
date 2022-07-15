/* Faça um programa, usando uma função que calcule a raiz quadrada de um número. */

var numero = parseInt(prompt("Digite o número que deseja saber a raiz quadrada"));
var resultado = CalculaRaizQuadrada(numero);
console.log(numero);

function CalculaRaizQuadrada(numero){
    return Math.sqrt(numero);
}
    