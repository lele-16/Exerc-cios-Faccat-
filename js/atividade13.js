let nota1 = Number (prompt('Digite sua 1° Nota: '));
let nota2 = Number (prompt('Digite sua 2° nota: '));
let nota3 = Number (prompt('Digite sua 3°'));
let mediaFinal = (nota1*2+nota2*3+nota3*5)/10

document.getElementById("demo").innerHTML =
"A media final do aluno é: " + mediaFinal + ".";