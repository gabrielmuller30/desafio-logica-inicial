let nome = prompt ("Digite seu nome: ");
let xp = prompt ("Insira seus pontos de experiência (XP): ");


switch (xp = true){
    case xp < 1000:
        xp = "Ferro";
        break;
    case xp >= 1001 && xp <= 2000:
        xp = "Bronze";
        break;
    case xp >= 2001 && xp <= 5000:
        xp = "Prata";
        break;
    case xp >= 5001 && xp <= 7000:
        xp = "Ouro";
        break;
    case xp >= 7001 && xp <= 8000:
        xp = "Platina";
        break;
    case xp >= 8001 && xp <= 9000:
        xp = "Ascendente";
        break;
    case xp >= 9001 && xp <= 10000:
        xp = "Imortal";
        break;
    case xp >= 10001:
        xp = "Radiante";
        break;
}

console.log("O herói de nome " + nome + " está no nível de " + xp)