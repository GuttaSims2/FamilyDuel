// Store player data
let teams = { team1: [], team2: [] };
let currentTeam = "team1";
let maxPlayers = 5;

// Elements
const app = document.getElementById("app");
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
    playerElement.innerHTML = `${playerName} <span style="color: green;">Ready!</span>`;
    playersContainer.appendChild(playerElement);

    playerNameInput.value = ""; // Clear input field
  }
});

// Switch to the next team's registration or start the game
startBtn.addEventListener("click", () => {
  if (teams[currentTeam].length === 0) return; // Ensure at least one player is added

  if (currentTeam === "team1") {
    // Move to the next team's registration
    currentTeam = "team2";
    teamNameInput.value = ""; // Clear team name for the second team
    playersContainer.innerHTML = ""; // Clear player list
  } else {
    // Both teams registered, start the game on the same page
    startGame();
  }
});

// Function to load the game content on the same page
function startGame() {
  // Clear the registration content
  app.innerHTML = "";

  // Create game container
  const gameContainer = document.createElement("div");
  gameContainer.className = "game-container";
  gameContainer.innerHTML = `
    <h1>Family Duel Game</h1>
    <div class="question-container">
      <p>Question: What is something people often forget?</p>
    </div>
    <div class="answers-container">
      <p>Answer 1: _____</p>
      <p>Answer 2: _____</p>
      <p>Answer 3: _____</p>
      <p>Answer 4: _____</p>
    </div>
    <button id="end-game-btn">End Game</button>
  `;

  app.appendChild(gameContainer);

  // End Game button functionality
  const endGameBtn = document.getElementById("end-game-btn");
  endGameBtn.addEventListener("click", () => {
    alert("Game Over!");
    location.reload(); // Reload the page to reset
  });
}
