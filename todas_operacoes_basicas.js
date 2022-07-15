/* Faça um programa, usando funções, que realize todas as operações básicas: soma, subtração, multiplicação, divisão. */

var numero1 = parseFloat(prompt("Digite o primeiro número"));
var numero2 = parseFloat(prompt("Digite o segundo número"));
var resultado = parseInt(prompt("1. Soma 2. Subtração 3. Multiplicação 4. Divisão"))

if (resultado == 1){
    resultado = soma(numero1, numero2);
} else if (resultado == 2){
    resultado = subtracao(numero1, numero2);
} else if (resultado == 3){
    resultado = multiplicacao(numero1, numero2);
} else if (resultado == 4){
    resultado = divisao(numero1, numero2);
} else {
    alert("O número escolhido não faz parte de nenhuma das operações.")
}

function soma (numero1, numero2){
    return numero1 + numero2;
}

function subtracao (numero1, numero2){
    return numero1 - numero2;
}

function multiplicacao (numero1, numero2){
    return numero1 * numero2;
}

function divisao (numero1, numero2){
    return numero1 / numero2;
}