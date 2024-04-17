let nome = "GaMullers";
let xp = 6533;
let nivel;

//while (!nome){
//    nome = prompt("Digite seu nome: ");
//}

//    if (!nome) {
//        console.log("Você não digitou nenhum nome. Por favor, insira seu nome.");
//    }


if (xp < 1000){
    nivel = "Ferro";
}else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze";
}else if (xp >= 2001 && xp <= 5000){
    nivel = "Prata";
}else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro";
}else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina";
}else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente";
}else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal";
}else if (xp >= 10001){
    nivel = "radiante"; 
}

// poderia usar o else também como última decisão

console.log("O herói de nome " + nome + " está no nível " + nivel);