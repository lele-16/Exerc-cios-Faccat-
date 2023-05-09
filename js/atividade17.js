let nota1 = Number(prompt('Digite sua nota da 1° avaliação: '))
let nota2 = Number(prompt('Digite sua 2° nota da avaliação: '))

let media = (nota1 + nota2)/2

console.log("A média do aluno é:", media.toFixed(2));

if (media >= 6) {
  console.log("O aluno foi aprovado!");
} else {
  console.log("O aluno não foi aprovado!");
}