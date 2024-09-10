let nomeJogadores = [
    ["HOMEM ARANHA", "MARVEL", 0, "nivel"],
    ["HOME DE FERRO", "MARVEL", 0, "nivel"],
    ["SAITAMA", "MADHOUSE", 0, "nivel"]
]

function numberVictories(numberOfDefeats, numberOfVictories) {
    let ranked = numberOfVictories - numberOfDefeats
    return ranked
}

nomeJogadores[0][2] = numberVictories(50, 100);
nomeJogadores[1][2] = numberVictories(30, 90);
nomeJogadores[2][2] = numberVictories(0, 100);

for (let i = 0; nomeJogadores.length > i; i++) {
    if (nomeJogadores[i][2] <= 10) {
        nomeJogadores[i][3] = "Ferro"
    }
    else if (nomeJogadores[i][2] >= 11 && nomeJogadores[i][2] <= 20) {
        nomeJogadores[i][3] = "Bronze"
    }
    else if (nomeJogadores[i][2] >= 21 && nomeJogadores[i][2] <= 50) {
        nomeJogadores[i][3] = "Prata"
    }
    else if (nomeJogadores[i][2] >= 51 && nomeJogadores[i][2] <= 80) {
        nomeJogadores[i][3] = "Ouro"
    }
    else if (nomeJogadores[i][2] >= 81 && nomeJogadores[i][2] <= 90) {
        nomeJogadores[i][3] = "Diamante"
    }
    else if (nomeJogadores[i][2] >= 91 && nomeJogadores[i][2] <= 100) {
        nomeJogadores[i][3] = "Lendário"
    }
    else {
        nomeJogadores[i][3] = "Imortal"
    }
}

console.log(nomeJogadores)
