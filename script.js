let teams = JSON.parse(localStorage.getItem("teams")) || { team1: [], team2: [] };
let currentTeam = "team1";
let team1Score = 0;
let team2Score = 0;

const team1Players = document.getElementById("team1-players");
const team2Players = document.getElementById("team2-players");
const question = document.getElementById("question");
const answers = document.querySelectorAll("#answers li");
const answerInput = document.getElementById("answer-input");
const submitAnswer = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");
const team1ScoreElement = document.getElementById("team1-score");
const team2ScoreElement = document.getElementById("team2-score");

// Display team members
teams.team1.forEach(player => {
  let li = document.createElement("li");
  li.textContent = player;
  team1Players.appendChild(li);
});

teams.team2.forEach(player => {
  let li = document.createElement("li");
  li.textContent = player;
  team2Players.appendChild(li);
});

// Handle answer submission
submitAnswer.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  let correct = false;

  answers.forEach(answer => {
    if (answer.textContent.toLowerCase().includes(userAnswer)) {
      answer.classList.remove("hidden");
      correct = true;

      if (currentTeam === "team1") {
        team1Score += parseInt(answer.textContent.split("-")[1].trim());
        team1ScoreElement.textContent = team1Score;
      } else {
        team2Score += parseInt(answer.textContent.split("-")[1].trim());
        team2ScoreElement.textContent = team2Score;
      }
    }
  });

  feedback.textContent = correct ? "Correct!" : "Wrong answer!";
  answerInput.value = "";

  // Switch teams after each turn
  currentTeam = currentTeam === "team1" ? "team2" : "team1";
});
