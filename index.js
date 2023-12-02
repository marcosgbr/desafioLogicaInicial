// Desafio do Herói

// Declarar as Variáveis:
let nomeHeroi = "Marquinho do mb"
let xpDoHeroi = 10001
let nivelHeroi = ""

//Estruturas de controle para definir os niveis:
if (xpDoHeroi < 1000) {
    nivelHeroi = "Ferro"
}
else if ((xpDoHeroi >= 1001) && (xpDoHeroi <= 2000)) {
    nivelHeroi = "Bronze"
}
else if ((xpDoHeroi >= 2001) && (xpDoHeroi <= 5000)) {
    nivelHeroi = "Prata"
}
else if ((xpDoHeroi >= 5001) && (xpDoHeroi <= 6000)) {
    nivelHeroi = "Ouro"
}
else if ((xpDoHeroi >= 6001) && (xpDoHeroi <= 7000)) {
    nivelHeroi = "Platina"
}
else if ((xpDoHeroi >= 7001) && (xpDoHeroi <= 8000)) {
    nivelHeroi = "Diamante"
}
else if ((xpDoHeroi >= 8001) && (xpDoHeroi <= 9000)) {
    nivelHeroi = "Ascendente"
}
else if ((xpDoHeroi >= 9001) && (xpDoHeroi <= 10000)) {
    nivelHeroi = "Imortal"
}
else if (xpDoHeroi >= 10001) {
    nivelHeroi = "Radiante"
}

//Saída do programa:

console.log("o Heró de nome " + nomeHeroi + " está no nível de " + nivelHeroi)