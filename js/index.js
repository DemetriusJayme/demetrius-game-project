// index.js

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
  console.log("entrei na funcao");
  console.log(flag);

  const qtdeDedosFirst = document.getElementById("inputQtdeFirst").value;
  const qtdeDedosSecond = document.getElementById("inputQtdeSecond").value;
  const total = parseInt(qtdeDedosFirst) + parseInt(qtdeDedosSecond);

  console.log(qtdeDedosFirst);
  console.log(qtdeDedosSecond);

  //const total = sum(qtdeDedosFirst.value, qtdeDedosSecond.value);

  console.log(total);

  if (total % 2 == 0) {
    console.log("eh par");
  } else {
    console.log("eh impar");
  }
}

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById"
//let Jogador1 = document.getElementById("InputName1");

//console.log(Jogador1); // <== what can you see in browser's console

// TO ADD TEXT TO DOM USE "innerHTML"
//jogador1.innerHTML = "I'm a dog";

// set the HTML content of "otherElement" to "I'm a cat"
//otherElement.innerHTML = theCatDiv.innerHTML;

//capturando todos os elementos de html
//const startScreen = document.getElementById("startScreen");
//const inputName = document.getElementById("inputName");
//const gameScreen = document.getElementById("gameScreen");
//const gameScore = document.getElementById("gameScore");
//const playerName = document.getElementById("name");
//const board = document.getElementById("board");
//const chances = 5;

//adicionar o event listener do submit
//addEventListener("submit", () => {
//instanciar a minha classe
//const game = new ParImparGame(inputName.value, chances);

// startScreen desapareça
//startScreen.classList.add("hide");

// mostrar o gameScore
//gameScore.className = "show";

//game.renderDeck();

//settingUpGame(game);;

/*
function settingUpGame(game) {
  // capturar todas as cardsBack
  // adicionar a ela um eventlistener
  const allCardsBack = document.querySelectorAll(".cardBack");

  allCardsBack.forEach((cardBack) =>
    cardBack.addEventListener("click", (event) => game.flipCard(event))
  );
}
*/
