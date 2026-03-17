document.write("<h1>Aula 1 - Exercicio 8</h1>");

var peso = prompt("Digite o valor do peso:");
var altura = prompt("Digite o valor da altura:");

var resultado = Number(peso) / Number(altura * altura);

document.write("O IMC é " + resultado + "<br>");