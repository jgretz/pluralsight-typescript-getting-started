const startGame = () => {
  const messagesElement = document.getElementById("messages");
  messagesElement!.innerHTML = "Welcome to the Game";
};

document.getElementById("startGame")?.addEventListener("click", startGame);
