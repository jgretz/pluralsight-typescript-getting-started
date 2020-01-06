const getInputValue = (id: string): string => {
  return (document.getElementById(id) as HTMLInputElement)?.value || "";
};

const postScores = (score: number, playerName?: string): void => {
  const logger: (value: string) => void = score < 0 ? logError : logMessage;
  logger(`Score: ${score}`);

  const scoreElement = document.getElementById("postedScores");
  scoreElement!.innerHTML = `${score} - ${playerName}`;
};

const logMessage = (message: string): void => {
  console.log(message);
};

const logError = (error: string): void => {
  console.error(error);
};

////////////////////////////////

const startGame = (): void => {
  postScores(100, getPlayerName());
  postScores(-5, getPlayerName());
};

const getPlayerName = (): string => getInputValue("playername");

const logPlayer = (name: string): void => {
  console.log(`New game starting for player ${name}`);
};

////////////////////////////////

document.getElementById("startGame")?.addEventListener("click", startGame);

////////////////////////////////

interface Employee {
  name: string;
  title: string;
}

interface Manager extends Employee {
  department: string;
  numberOfEmployees: number;

  scheduleMeeting: (topic: string) => void;
}
