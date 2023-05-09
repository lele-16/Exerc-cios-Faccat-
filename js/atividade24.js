let salarioFixo = Number(prompt('Digite seu salário fixo: '));
let vendasEfetuadas = Number(prompt('Digite suas vendas efetuadas: '));
let comissao;

if(vendasEfetuadas <= 1500){
     comissao = salarioFixo*5/0.03;
}

else{
comissao = (1500*0.03) + ((vendasEfetuadas - 1500)*0.05);
}

let salarioTotal=salarioFixo+comissao;

console.log('O Salário total do funcionário é: ',salarioTotal.toFixed(2));
