let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));
let c = parseInt(prompt("Digite o terceiro valor:"));

let soma = a + b + c - Math.min(a, b, c);

console.log(soma);