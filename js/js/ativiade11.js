let carrosVendidos =Number(prompt('Digite quantos carro foram vendidos: '));
let totalVendas = Number(prompt('Digite o valor total de vendas'));
let salarioFixo = Number(prompt('Digite o valor do salário fixo: '));
let comissaoFixa = Number(prompt('Digite o comissão fixa: '));
let salarioFinal = Number = (salarioFixo*carrosVendidos*comissaoFixa+totalVendas)*5/100;

document.getElementById("demo").innerHTML =
"O sálario final é: R$" + salarioFinal + ".";  