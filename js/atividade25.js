let saldo=Number (prompt('Digite o seu saldo: '));
let debito =Number(prompt('Digite seu débito'));
let credito = Number (prompt('Digite seu crédito'));
let saldoAtual = saldo - debito + credito;

if(saldoAtual=> 0){
    console.log('Saldo Positivo',saldoAtual);
}
else{
    console.log('Saldo Negativo',SaldoAtual)
}