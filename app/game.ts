import { Player } from "./player";
import { Scoreboard } from "./scoreboard";
import { Utility } from "./utility";
import { Result } from "./result";

export class Game {
  private scoreboard = new Scoreboard();

  constructor(
    public player: Player,
    public problemCount: number,
    public factor: number
  ) {}

  displayGame() {
    // build form
    const forms = [];
    for (let i = 0; i < this.problemCount; i++) {
      forms.push(`
        <div class="form-group">
          <label for"answer${i}" class="col-sm-2 control-label">${this.factor} x ${i}</label>
          <div class="col-sm-1">
            <input type="text" class="form-control" id="answer${i}" size="5" />
          </div>
        </div>
      `);
    }

    const gameElement: HTMLElement = document.getElementById("game")!;
    gameElement.innerHTML = forms.join("");

    // enable score button
    document.getElementById("calculate")!.removeAttribute("disabled");
  }

  calculateScore() {
    let score = 0;
    for (let i = 0; i < this.problemCount; i++) {
      const answer: number = Number(Utility.getInputValue(`answer${i}`));
      if (answer === i * this.factor) {
        score++;
      }
    }

    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor
    };

    this.scoreboard.addResult(result);
    this.scoreboard.updateScoreboard();

    // disable the score button
    document.getElementById("calculate")!.setAttribute("disabled", "true");
  }
}
