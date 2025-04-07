rodada = 1;
//venceu = 0;
while(rodada <= 3){
  console.log("Rodada.:" + rodada);
  escolhajogador = prompt("Nível: "+ rodada  + ", Vidro (1, 2 ou 3)? ");
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;
   if(escolhajogador == pisoQuebrado){
     alert("Vidro Quebrado!"); 
     rodada = 10;
  } else{
    alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado);
  }
  
    rodada = rodada + 1;
}

if(rodada == 4 ){
  alert("Parabéns você Venceu!");
}