let anoAtual = Number(prompt('Digite em que ano você está: '))
let anoNascimento = Number(prompt('Digite o ano que você nasceu: '))
let idade = anoAtual - anoNascimento
console.log('Sua idade é:',idade.toFixed(2));

if(idade => 16){
    console.log('Você pode votar')
}

else{
    console.log('Você não pode votar')
}