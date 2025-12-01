let nomeHeroi = "Julius";
let powerXP = 7110;
let material = ["Ferro", "Bronze", "Prata", "Ouro", "Platina Diamante", "Ascendente", "Imortal","Radiante"];
let nivel = "";

if (powerXP < 1000) {
    nivel = material[0];
} else if (powerXP <= 2000){
    nivel = material[1];
}else if (powerXP <= 3000){
    nivel = material[2];
}else if (powerXP <= 5000){
    nivel = material[3];
}else if (powerXP <= 8000){
    nivel = material[4];
}else if (powerXP <= 9000){
    nivel = material[5];
}else if (powerXP <= 10000){
    nivel = material[6];
}else {
    nivel = material[7];
}


console.log(`
    ############################################################################
    O herói ${nomeHeroi} tem ${powerXP} de experiência e está no nivel: ${nivel}
    ############################################################################
    `);