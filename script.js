let team = { name: "", players: [] };

const teamNameInput = document.getElementById("team-name-input");
const setTeamNameBtn = document.getElementById("set-team-name");
const playerNameInput = document.getElementById("player-name-input");
const addPlayerBtn = document.getElementById("add-player-btn");
const playerList = document.getElementById("player-list");
const startGameBtn = document.getElementById("start-game");

// Set the team name
setTeamNameBtn.addEventListener("click", () => {
  const name = teamNameInput.value.trim();
  if (name) {
    team.name = name;
    alert(`Team name set to: ${team.name}`);
    teamNameInput.disabled = true;
    setTeamNameBtn.disabled = true;
    enableGameStart();
  }
});

// Add a player to the team
addPlayerBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  if (playerName && team.players.length < 5) {
    team.players.push(playerName);
    updatePlayerList();
    playerNameInput.value = "";
    enableGameStart();
  } else if (team.players.length >= 5) {
    alert("Maximum of 5 players reached.");
  }
});

// Update the player list display
function updatePlayerList() {
  playerList.innerHTML = "";
  team.players.forEach((player) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${player} <span>Ready!</span>`;
    playerList.appendChild(listItem);
  });
}

// Enable the Start Game button if all conditions are met
function enableGameStart() {
  if (team.name && team.players.length >= 3) {
    startGameBtn.disabled = false;
  }
}

// Example of starting the game
startGameBtn.addEventListener("click", () => {
  alert(`Starting game for Team ${team.name} with players: ${team.players.join(", ")}`);
  // Proceed to the next part of your game logic...
});
