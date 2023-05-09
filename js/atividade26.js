let quantidadeAtual = Number(prompt('Digite a quantidade atual de produtos no estoque: '));
let quantidadeMaxima = Number(prompt('Digite a quantidade máxima: '));
let quantidadeMinima = Number(prompt('Digite a quantidade mínima: '));
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima)/2

if(quantidadeatual=>quantidadeMedia){
    console.log('Não efetuar compra')
}

else{
    console.log('Efetuar compra')
}