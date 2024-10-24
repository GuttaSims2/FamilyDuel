// Store player data
let teams = { team1: [], team2: [] };
let currentTeam = "team1";
let maxPlayers = 5;

// Elements
const formContainer = document.querySelector(".form-container");
const teamNameInput = document.querySelector("#team-name");
const playerNameInput = document.querySelector("#player-name");
const joinBtn = document.querySelector("#join-btn");
const playersContainer = document.querySelector(".players-container");
const startBtn = document.querySelector("#start-btn");

// Function to add player to the team
joinBtn.addEventListener("click", () => {
  const playerName = playerNameInput.value.trim();
  if (playerName && teams[currentTeam].length < maxPlayers) {
    teams[currentTeam].push(playerName);

    // Display player in the list with "Ready!"
    const playerElement = document.createElement("p");
    playerElement.innerHTML = `${playerName} <span>Ready!</span>`;
    playersContainer.appendChild(playerElement);

    playerNameInput.value = ""; // Clear input field
  }
});

// Switch to team 2 registration after team 1 is full
startBtn.addEventListener("click", () => {
  if (teams[currentTeam].length === 0) return;

  if (currentTeam === "team1") {
    // Move to the next team's registration
    currentTeam = "team2";
    teamNameInput.value = ""; // Clear team name for the second team
    playersContainer.innerHTML = ""; // Clear player list
  } else {
    // Both teams are registered, start the game
    localStorage.setItem("teams", JSON.stringify(teams));
    window.location.href = "game.html"; // Redirect to game page
  }
});
