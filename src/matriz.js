//matriz
//nome/studio/xp

let nomeXp = ""

let nomesHerois = [
    ["Homem Aranha", "Marvel", 5500],
    ["Homem de Ferro", "Marvel", 7500],
    ["Aquaman", "Dc", 8500],
    ["Mulher Maravilha", "Dc", 9500],
    ["Saitama", "Madhouse", 100000]
]

for (i = 0; i < nomesHerois.length; i++) {

    if (nomesHerois[i][2] <= 1000) {
        nomeXp = "Ferro";
    } else if (nomesHerois[i][2] >= 1001 && nomesHerois[i][2] <= 2000) {
        nomeXp = "Bronze"
    }
    else if (nomesHerois[i][2] >= 2001 && nomesHerois[i][2] <= 5000) {
        nomeXp = "Prata"
    }
    else if (nomesHerois[i][2] >= 5001 && nomesHerois[i][2] <= 7000) {
        nomeXp = "Ouro"
    }
    else if (nomesHerois[i][2] >= 7001 && nomesHerois[i][2] <= 8000) {
        nomeXp = "Platina"
    }
    else if (nomesHerois[i][2] >= 8001 && nomesHerois[i][2] <= 9000) {
        nomeXp = "Ascendente"
    }
    else if (nomesHerois[i][2] >= 9001 && nomesHerois[i][2] <= 10000) {
        nomeXp = "Imortal"
    }
    else if (nomesHerois[i][2] >= 10001) {
        nomeXp = "Radiante";
    }

    console.log("O Heroi " + nomesHerois[i][0] + " De Xp : " + nomesHerois[i][2] + " Está no nível de : " + nomeXp)
}
