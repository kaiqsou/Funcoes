/* Faça um programa, usando uma função o que retorne um valor booleano (true ou false) informando se o número enviado como parâmetro é ímpar. */

var numero = parseInt(prompt("Digite um número inteiro que você deseja verificar se é impar."));
var resultado = ehImpar(numero);
console.log(resultado);

if (ehImpar(numero)){
    console.log(numero + " é impar");
} else {
    console.log(numero + " é par");
}

function ehImpar(numero){
    return numero % 2 != 0;
}