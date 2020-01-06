import { Game } from "./game";
import { Player } from "./player";
import { Utility } from "./utility";

let game: Game;

////////////////////////////////

const handleStartGame = (): void => {
  const player = new Player();
  player.name = Utility.getInputValue("playername");

  const problemCount: number = Number(Utility.getInputValue("problemCount"));
  const factor: number = Number(Utility.getInputValue("factor"));

  game = new Game(player, problemCount, factor);
  game.displayGame();
};

const handleCalculate = (): void => {
  game.calculateScore();
};

////////////////////////////////

const initialize = (): void => {
  document
    .getElementById("startGame")!
    .addEventListener("click", handleStartGame);
  document
    .getElementById("calculate")!
    .addEventListener("click", handleCalculate);
};
initialize();
