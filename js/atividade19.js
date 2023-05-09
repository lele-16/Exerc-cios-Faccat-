let valor1 = Number(prompt('Digite um valor'));
let valor2 = Number(prompt('Digite outro valor'));

console.log('os valores são' ,valor1,valor2.toFixed(2));

if (valor1<valor2){
    console.log('O maior valor é: ',valor2)
}

else{
    console.log('o maior valor é',valor1)
}