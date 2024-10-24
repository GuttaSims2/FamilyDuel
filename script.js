const questions = [
  {
    question: "Name a common pet.",
    answers: ["Dog", "Cat", "Fish", "Bird"],
  },
  {
    question: "Name something you do before bed.",
    answers: ["Brush teeth", "Read", "Watch TV", "Set alarm"],
  },
  {
    question: "Name a popular pizza topping.",
    answers: ["Pepperoni", "Cheese", "Mushrooms", "Olives"],
  },
  {
    question: "Name a holiday people decorate for.",
    answers: ["Christmas", "Halloween", "Easter", "Thanksgiving"],
  }
];

let currentRound = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const roundNumber = document.getElementById("round-number");
const scoreDisplay = document.getElementById("score");
const nextRoundBtn = document.getElementById("next-round-btn");

function loadRound(roundIndex) {
  const round = questions[roundIndex];
  questionText.textContent = round.question;
  answersContainer.innerHTML = "";

  round.answers.forEach((answer) => {
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = answer;
    answerElement.addEventListener("click", () => revealAnswer(answerElement));
    answersContainer.appendChild(answerElement);
  });
}

function revealAnswer(element) {
  if (!element.classList.contains("correct")) {
    element.classList.add("correct");
    score += 10; // Add points for correct answers
    scoreDisplay.textContent = score;
  }
}

nextRoundBtn.addEventListener("click", () => {
  currentRound++;
  if (currentRound < questions.length) {
    roundNumber.textContent = currentRound + 1;
    loadRound(currentRound);
  } else {
    questionText.textContent = "Game Over! Your final score is " + score;
    answersContainer.innerHTML = "";
    nextRoundBtn.style.display = "none";
  }
});

// Start the game with the first round
loadRound(currentRound);
