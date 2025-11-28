let nomeHeroi = "Julius";
let powerXP = 7654;
let material = ["Ferro", "Bronze", "Prata", "Ouro", "Platina Diamante", "Ascendente", "Imortal","Radiante"];
let nivel = "";

if (powerXP < 1000) {
    nivel = material[0];
} else if (powerXP >= 1001 && powerXP <= 2000){
    nivel = material[1];
}else if (powerXP >= 2001 && powerXP <= 3000){
    nivel = material[2];
}else if (powerXP >= 3001 && powerXP <= 5000){
    nivel = material[3];
}else if (powerXP >= 5001 && powerXP <= 8000){
    nivel = material[4];
}else if (powerXP >= 8001 && powerXP <= 9000){
    nivel = material[5];
}else if (powerXP >= 9001 && powerXP <= 10000){
    nivel = material[6];
}else if (powerXP >= 10001){
    nivel = material[7];}


console.log("O heroi " + nomeHeroi + " está no nivel: " + nivel);