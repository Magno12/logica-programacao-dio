//matriz
//nome/studio/xp

/* Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

let nomeXp = ""

let nomesHerois = [
    ["HOMEM ARANHA", "MARVEL", 5500],
    ["HOME DE FERRO", "MARVEL", 7500],
    ["AQUAMAN", "DC", 8500],
    ["MULHER MARAVILHA", "DC", 9500],
    ["SAITAMA", "MADHOUSE", 100000]
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

    console.log("O Heroi " + nomesHerois[i][0] + " De Xp : " + nomesHerois[i][2] + " Está no nível de : " + nomeXp.toUpperCase() + "\n" + nomesHerois[i][1] )
}

