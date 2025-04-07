const viloesPosiveis = ['Bowser', 'Vaas', 'Shao Khan', 'Nagato', 'Jessie', 'Xerosic', 'Cyrus'];

function coletarPersonagens() {
  let personagens = [];
  let forcaPersonagem = 0;

  for (let i = 0; i < 3; i++) {
    let personagem = prompt(`Qual é o nome do seu personagem ${i + 1}?`);
    if (personagem) { // Verifica se o nome não é vazio
      personagens.push(personagem);
      forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    } else {
      alert("Nome inválido, tente novamente.");
      i--; // Decrementa i para repetir a iteração
    }
  }
  
  console.log(`Agora, o array Personagem contém: ${personagens}`);
  return forcaPersonagem;
}

function coletarViloes() {
  let viloes = [];
  let forcaViloes = 0;

  for (let i = 0; i < 3; i++) {
    let indiceAleatorio = Math.floor(Math.random() * viloesPosiveis.length);
    viloes.push(viloesPosiveis[indiceAleatorio]);
    forcaViloes += Math.floor(Math.random() * 10) + 1;
  }

  console.log(`VFinal - Vilões: ${viloes}`);
  return forcaViloes;
}

function compararForcas(forcaPersonagem, forcaViloes) {
  if (forcaPersonagem > forcaViloes) {
    alert(`Parabéns, você venceu! Sua força: ${forcaPersonagem}`);
  } else if (forcaPersonagem < forcaViloes) {
    alert(`Parabéns, o adversário venceu! Força utilizada: ${forcaViloes}`);
  } else {
    alert("Empate!");
  }
}

// Execução do jogo
let forcaPersonagem = coletarPersonagens();
let forcaViloes = coletarViloes();
compararForcas(forcaPersonagem, forcaViloes);