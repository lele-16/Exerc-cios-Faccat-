let nome = (prompt('Digite o seu nome: '));
let sexo = (prompt('Digite qual seu sexo: '));
let altura = (prompt('Digite sua altura: '));
let pesoIdeal;
if(sexo=M) {
    pesoideal = (72.7 * altura) - 58
}

else{
    pesoIdeal = (62.1 + altura) - 44.7
}

console.log("O peso ideal é: ", pesoIdeal.toFixed(2));