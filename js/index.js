// index.js

const parimpar = new ParImparGame();

//Verifica a conexao com JS
console.log("JS connected"); // <== just a quick check up to make sure js doc is connected properly

btnPar.onclick = () => {
  console.log("cliquei no botão par");
  resultGame("par");
};

btnImpar.onclick = () => {
  console.log("cliquei no botão impar");
  resultGame("impar");
};

//Calcula o resultado do jogo
function resultGame(flag) {
  //Declarando as constantes
  const qtdeDedosFirst = document.getElementById("inputQtdeFirst").value;
  const qtdeDedosSecond = document.getElementById("inputQtdeSecond").value;
  const total = parseInt(qtdeDedosFirst) + parseInt(qtdeDedosSecond);

  console.log(qtdeDedosFirst);
  console.log(qtdeDedosSecond);
  console.log(total);

  //Verifica se e par ou impar
  if (total % 2 == 0) {
    console.log("eh par");
    opcFinal = "par";
  } else {
    console.log("eh impar");
    opcFinal = "impar";
  }

  //Verifica opcao do Jogador 1 e Jogador 2
  if (flag === "par") {
    opcJog1 = "par";
    opcJog2 = "impar";
  } else {
    opcJog1 = "impar";
    opcJog2 = "par";
  }

  //Chama a funcao Display
  //const Jogador1 = document.getElementById("inputName1").value;
  const Jogador2 = document.getElementById("inputName2").value;

  const Jogador1 = parimpar.nomeJogador(1);

  console.log("mostrar a chamada do metodo");
  console.log(Jogador1);

  console.log(Jogador2);

  console.log(name1.innerText);
  console.log(name2.innerText);

  /* Encontrando o vencedor */
  if (opcFinal === opcJog1) {
    nomeVencedor = "JOGADOR 1";
  } else {
    nomeVencedor = "JOGADOR 2 DOIS";
  }

  /* Mostrando as informacoes de saida */
  name1.innerText = Jogador1;
  name2.innerText = Jogador2;
  escolha1.innerText = opcJog1;
  escolhaDedos1.innerText = qtdeDedosFirst;
  escolha2.innerText = opcJog2;
  escolhaDedos2.innerText = qtdeDedosSecond;
  final.innerText = total;
  escolha3.innerText = opcFinal;
  vencedor.innerText = nomeVencedor;
}
