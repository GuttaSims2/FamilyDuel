const questions = [
  { question: "Name a common pet.", answers: ["Dog", "Cat", "Fish", "Bird"] },
  { question: "Name something you do before bed.", answers: ["Brush teeth", "Read", "Watch TV", "Set alarm"] },
  { question: "Name a popular pizza topping.", answers: ["Pepperoni", "Cheese", "Mushrooms", "Olives"] },
  { question: "Name a holiday people decorate for.", answers: ["Christmas", "Halloween", "Easter", "Thanksgiving"] }
];

let team1 = { name: "", players: [], score: 0 };
let team2 = { name: "", players: [], score: 0 };
let currentTeam = 1;
let currentPlayer = 0;
let currentRound = 0;
let strikes = 0;

const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitAnswerBtn = document.getElementById("submit-answer");
const strikeCount = document.getElementById("strike-count");
const nextTurnBtn = document.getElementById("next-turn-btn");
const roundNumber = document.getElementById("round-number");
const team1Score = document.getElementById("team1-score");
const team2Score = document.getElementById("team2-score");

// Add players to teams
function addPlayer(team) {
  const playerContainer = document.getElementById(`team${team}-players`);
  const playerInput = document.createElement("input");
  playerInput.type = "text";
  playerInput.placeholder = `Player ${playerContainer.children.length + 1}`;
  playerContainer.appendChild(playerInput);
}

// Start game after team setup
document.getElementById("setup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  team1.name = document.getElementById("team1-name").value;
  team2.name = document.getElementById("team2-name").value;

  team1.players = Array.from(document.getElementById("team1-players").children).map(input => input.value);
  team2.players = Array.from(document.getElementById("team2-players").children).map(input => input.value);

  document.getElementById("team-setup").style.display = "none";
  document.getElementById("game-section").style.display = "block";

  loadRound();
});

function loadRound() {
  const round = questions[currentRound];
  questionText.textContent = round.question;
  answerInput.value = "";
  strikes = 0;
  strikeCount.textContent = strikes;
}

submitAnswerBtn.addEventListener("click", () => {
  const answer = answerInput.value.trim().toLowerCase();
  const correctAnswers = questions[currentRound].answers.map(a => a.toLowerCase());

  if (correctAnswers.includes(answer)) {
    updateScore();
  } else {
    strikes++;
    strikeCount.textContent = strikes;
    if (strikes >= 3) nextPlayer();
  }
});

function updateScore() {
  const team = currentTeam === 1 ? team1 : team2;
  team.score += 10;
  (currentTeam === 1 ? team1Score : team2Score).textContent = team.score;
  nextPlayer();
}

function nextPlayer() {
  currentPlayer = (currentPlayer + 1) % team1.players.length;
  if (currentPlayer === 0) currentTeam = currentTeam === 1 ? 2 : 1;
  if (currentPlayer === 0 && currentTeam === 1) nextRound();
}

function nextRound() {
  currentRound++;
  if (currentRound < questions.length) {
    roundNumber.textContent = currentRound + 1;
    loadRound();
  } else {
    questionText.textContent = "Game Over!";
  }
}
