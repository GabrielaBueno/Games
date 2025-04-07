let valorWons = parseFloat(prompt("Digite o valor em Won:"));
let taxaWonBrl = 0.0038;
let taxaUsd = 4.9;
let taxaEur = 5.3;

let valorBrl = valorWons * taxaWonBrl;
let valorUsd = valorBrl / taxaUsd;
let valorEur = valorBrl / taxaEur;

function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

alert("Valor em R$: " + formatarValor(valorBrl) + 
      "\nUSD: " + formatarValor(valorUsd) + 
      "\nEUR: " + formatarValor(valorEur));
