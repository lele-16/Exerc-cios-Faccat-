let valor1 = Number(prompt('Digite um valor'));
let valor2 = Number(prompt('Digite outro valor'));

console.log('os valores são' ,valor1,valor2.toFixed(2));

if (valor1<valor2){
    console.log('A ordem crescente é: ',valor1, valor2)
}

else{
    console.log('A ordem é crescente: ',valor2,valor1)
}