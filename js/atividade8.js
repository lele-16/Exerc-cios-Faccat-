let totalEleitores=Number (prompt('Digite o total de eleitores'));
let votosBrancos=Number (prompt('Digite o total de votos em branco'));
let votosNulos=Number (prompt('Digite o total de votos nulos'));
let votosValidos=Number (prompt('Digite o total de votos validos'));
let resultado =Number (votosBrancos/totalEleitores)*100
let resultado2 =Number (votosNulos/totalEleitores)*100
let resultado3 =Number (votosValidos/totalEleitores)*100

document.getElementById("demo").innerHTML =
"porcentagem de votos brancos: %" + resultado + "porcentagem de votos nulos: %" +resultado2+ "porcentagem de votos válidos: %" +resultado3; 







