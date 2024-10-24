const questions = [
  { question: "Name a common pet.", answers: ["Dog", "Cat", "Fish", "Bird"] },
  { question: "Name something you do before bed.", answers: ["Brush teeth", "Read", "Watch TV", "Set alarm"] },
  { question: "Name a popular pizza topping.", answers: ["Pepperoni", "Cheese", "Mushrooms", "Olives"] }
];

let team1 = { name: "", players: [], score: 0 };
let team2 = { name: "", players: [], score: 0 };
let currentTeam = 1;
let strikes = 0;
let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const strikeDisplay = document.getElementById("strike");
const answerInput = document.getElementById("answer-input");
const submitAnswerBtn = document.getElementById("submit-answer");

// Display team names and players
function displayTeamInfo() {
  document.getElementById("team1-name-display").textContent = team1.name;
  document.getElementById("team2-name-display").textContent = team2.name;
  displayPlayers(1);
  displayPlayers(2);
}

function displayPlayers(team) {
  const playerContainer = document.getElementById(`team${team}-players`);
  playerContainer.innerHTML = "";
  const players = team === 1 ? team1.players : team2.players;
  players.forEach(player => {
    const playerElem = document.createElement("p");
    playerElem.textContent = player;
    playerContainer.appendChild(playerElem);
  });
}

// Load a new question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;
  answersContainer.innerHTML = "";
  question.answers.forEach(answer => {
    const answerElem = document.createElement("div");
    answerElem.textContent = answer;
    answersContainer.appendChild(answerElem);
  });
}

// Handle submitting an answer
submitAnswerBtn.addEventListener("click", () => {
  const answer = answerInput.value.trim().toLowerCase();
  const correctAnswers = questions[currentQuestionIndex].answers.map(a => a.toLowerCase());

  if (correctAnswers.includes(answer)) {
    alert("Correct!");
  } else {
    handleStrike();
  }

  answerInput.value = "";
});

// Handle incorrect answers
function handleStrike() {
  strikes++;
  strikeDisplay.style.display = "block";

  setTimeout(() => {
    strikeDisplay.style.display = "none";
  }, 1000);

  if (strikes >= 3) {
    alert("Three strikes! Switching teams.");
    strikes = 0;
    currentTeam = currentTeam === 1 ? 2 : 1;
  }
}

// Start the game
function startGame(team1Name, team1Players, team2Name, team2Players) {
  team1.name = team1Name;
  team1.players = team1Players;
  team2.name = team2Name;
  team2.players = team2Players;

  displayTeamInfo();
  loadQuestion();
}

// Example game start (you can replace this with actual user input logic)
startGame("The Smiths", ["Alice", "Bob"], "The Johnsons", ["Eve", "Charlie"]);
