let  salarioMensal=Number(prompt('Digite o valor do salário mensal: '));
let  percentual=Number(prompt('Digite o percentual de reajuste: '));
let  reajuste= salarioMensal - (-percentual*salarioMensal)/100;

document.getElementById("demo").innerHTML =
"A Soma é: " +reajuste;
