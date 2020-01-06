import { Result } from "./result";

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
  }

  updateScoreboard(): void {
    const title: string = "<h2>Scoreboard</h2>";

    const lines = this.results.map((result: Result) => {
      return `
      <h4>
        ${result.playerName}: ${result.score} / ${result.problemCount} for factor ${result.factor} 
      </h4>
      `;
    });

    const html: string = [title, ...lines].join("");

    const scoreElement = document.getElementById("postedScores");
    scoreElement!.innerHTML = html;
  }
}
