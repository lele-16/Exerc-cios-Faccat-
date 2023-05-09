let horasTrabalhadas = Number (prompt('Digite quantas horas trabalhadas: '));
let salarioHora = Number(prompt('Digite seu salário por hora: '));

if (horasTrabalhadas > 160) {
    horasExtras = horasTrabalhadas - 160;
    horasTrabalhadas = 160;
  }
  
  let salarioTotal = (horasTrabalhadas * salarioHora) + (horasExtras * salarioHora * 1.5);
  
  console.log("O salário total do funcionário é: R$", salarioTotal.toFixed(2));