// PARTE 1: Lista de perguntas e respostas
perguntas = [
{
    pergunta: "Quanto é 2+2?",
    respostas: [
      { opcao: "4", correto: true },
      { opcao: "6", correto: false },
      { opcao: "2", correto: false },
      { opcao: "8", correto: false }
    ]
  },
  {
    pergunta: "Qual é a capital da França?",
    respostas: [
      { opcao: "Paris", correto: true },
      { opcao: "Londres", correto: false },
      { opcao: "Berlim", correto: false },
      { opcao: "Madrid", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    respostas: [
      { opcao: "Júpiter", correto: true },
      { opcao: "Terra", correto: false },
      { opcao: "Marte", correto: false },
      { opcao: "Saturno", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respostas: [
      { opcao: "Pacífico", correto: true },
      { opcao: "Atlântico", correto: false },
      { opcao: "Índico", correto: false },
      { opcao: "Ártico", correto: false }
    ]
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      { opcao: "Leonardo da Vinci", correto: true },
      { opcao: "Michelangelo", correto: false },
      { opcao: "Rafael", correto: false },
      { opcao: "Donatello", correto: false }
    ]
  },
  {
    pergunta: "Quantos continentes existem?",
    respostas: [
      { opcao: "7", correto: true },
      { opcao: "5", correto: false },
      { opcao: "6", correto: false },
      { opcao: "8", correto: false }
    ]
  },
  {
    pergunta: "Qual é a capital da Austrália?",
    respostas: [
      { opcao: "Canberra", correto: true },
      { opcao: "Sydney", correto: false },
      { opcao: "Melbourne", correto: false },
      { opcao: "Brisbane", correto: false }
    ]
  },
  {
    pergunta: "Quem escreveu 'Dom Quixote'?",
    respostas: [
      { opcao: "Miguel de Cervantes", correto: true },
      { opcao: "William Shakespeare", correto: false },
      { opcao: "Jane Austen", correto: false },
      { opcao: "Charles Dickens", correto: false }
    ]
  },
  {
    pergunta: "Qual é o metal mais abundante na crosta terrestre?",
    respostas: [
      { opcao: "Alumínio", correto: true },
      { opcao: "Ferro", correto: false },
      { opcao: "Cobre", correto: false },
      { opcao: "Ouro", correto: false }
    ]
  },
  {
    pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
    respostas: [
      { opcao: "1969", correto: true },
      { opcao: "1970", correto: false },
      { opcao: "1968", correto: false },
      { opcao: "1971", correto: false }
    ]
  }
];
// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
