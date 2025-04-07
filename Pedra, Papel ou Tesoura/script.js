let idade = prompt("Quantos anos você tem?");

if (idade >= 18) {
    alert("Seja bem-vindo ao jogo!");
    let escolhajogador = prompt("Digite 1 - Pedra, Digite 2 - Papel ou Digite 3 - Tesoura");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
    if (escolhajogador === "1" || escolhajogador === "2" || escolhajogador === "3") {
        escolhajogador = parseInt(escolhajogador);
        
        if (escolhajogador === escolhaComputador) {
            alert("Empate!");
        } else if (
            (escolhajogador === 1 && escolhaComputador === 2) ||
            (escolhajogador === 2 && escolhaComputador === 3) ||
            (escolhajogador === 3 && escolhaComputador === 1)
        ) {
            alert("Computador Venceu, escolheu: " + (escolhaComputador === 1 ? "PEDRA" : escolhaComputador === 2 ? "PAPEL" : "TESOURA") + "!");
        } else {
            alert("Jogador Venceu, escolheu: " + (escolhaComputador === 1 ? "PEDRA" : escolhaComputador === 2 ? "PAPEL" : "TESOURA") + "!");
        }
        
        alert("Escolha do Computador: " + (escolhaComputador === 1 ? "PEDRA" : escolhaComputador === 2 ? "PAPEL" : "TESOURA"));
    } else if (escolhajogador === "4") {
        alert("Opção inválida! O número 4 não existe neste jogo.");
    } else {
        alert("Entrada inválida! Digite apenas os números 1, 2 ou 3.");
    }
} else {
    alert("Este jogo é permitido somente para maiores de 18 anos.");
}