// index.js

console.log("JS connected"); // <== just a quick check up to make sure js doc is connected properly

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById"
let Jogador1 = document.getElementById("InputName1");

console.log(Jogador1); // <== what can you see in browser's console

// TO ADD TEXT TO DOM USE "innerHTML"
jogador1.innerHTML = "I'm a dog";

// set the HTML content of "otherElement" to "I'm a cat"
otherElement.innerHTML = theCatDiv.innerHTML;

//capturando todos os elementos de html
const startScreen = document.getElementById("startScreen");
const inputName = document.getElementById("inputName");
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const board = document.getElementById("board");
const chances = 5;

//adicionar o event listener do submit
addEventListener("submit", () => {
  //instanciar a minha classe
  const game = new ParImparGame(inputName.value, chances);

  // startScreen desapareça
  startScreen.classList.add("hide");

  // mostrar o gameScore
  //gameScore.className = "show";

  //game.renderDeck();

  //settingUpGame(game);
});

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
