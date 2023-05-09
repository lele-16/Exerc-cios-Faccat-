let anos=Number (prompt('digite há quantos anos você nasceu: '));
let meses=Number (prompt('Digite há quantos meses foim o seu aniversário: '));
let dias = anos*365+meses*30
document.getElementById("demo").innerHTML =
"Sua idade é: " + dias + "."; 