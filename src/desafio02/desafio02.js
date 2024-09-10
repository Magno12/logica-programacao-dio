let nameHeroi = "Jogador 01"
let defeats = 5 //derrotas
let victories = 200 //vitorias
let numberRanked = 0 //
let nivel = ""

function numberVictories(numberOfDefeats, numberOfVictories) {
    let ranked = numberOfVictories - numberOfDefeats
    return ranked
}

numberRanked = numberVictories(defeats, victories);

if (numberRanked <= 10) {
    nivel = "Ferro"
}
else if (numberRanked >= 11 && numberRanked <= 20) {
    nivel = "Bronze"
}
else if (numberRanked >= 21 && numberRanked <= 50) {
    nivel = "Prata"
}
else if (numberRanked >= 51 && numberRanked <= 80) {
    nivel = "Ouro"
}
else if (numberRanked >= 81 && numberRanked <= 90) {
    nivel = "Diamante"
}
else if (numberRanked >= 91 && numberRanked <= 100) {
    nivel = "Lendário"
}
else {
    nivel="Imortal"
}

console.log(`O Heroi : ${nameHeroi} tem de saldo **${numberRanked}** está no nível de **${nivel}**`)