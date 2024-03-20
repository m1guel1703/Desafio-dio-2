function nivelRanqueada(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas

if (saldoVitorias <=10 ){
    nivel = "Ferro"
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"
} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"
} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Léndario"
} else {
    nivel = "Imortal"
}

return "O héroi " + heroi + " Tem " + saldoVitorias + " De pontuação ranqueada, e está no nível" + nivel

}

let heroi = "Homem de Ferro"
let vitorias = 86
let derrotas = 56
const resultado = nivelRanqueada(vitorias, derrotas)
console.log(resultado)
