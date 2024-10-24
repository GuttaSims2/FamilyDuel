let team1 = [];
let team2 = [];

// Team 1 Registration Logic
document.getElementById('add-team1-player').addEventListener('click', () => {
  const playerName = document.getElementById('player1-name').value.trim();
  if (playerName) {
    team1.push(playerName);
    displayPlayer('team1-players', playerName);
    document.getElementById('player1-name').value = '';
  }
});

document.getElementById('proceed-to-team2').addEventListener('click', () => {
  document.getElementById('team1-form').classList.add('hidden');
  document.getElementById('team2-form').classList.remove('hidden');
});

// Team 2 Registration Logic
document.getElementById('add-team2-player').addEventListener('click', () => {
  const playerName = document.getElementById('player2-name').value.trim();
  if (playerName) {
    team2.push(playerName);
    displayPlayer('team2-players', playerName);
    document.getElementById('player2-name').value = '';
  }
});

document.getElementById('start-game').addEventListener('click', () => {
  console.log('Game starting with:', { team1, team2 });
  alert('Game starting!');
});

// Display Players
function displayPlayer(containerId, playerName) {
  const container = document.getElementById(containerId);
  const playerItem = document.createElement('p');
  playerItem.innerHTML = `${playerName} <span>Ready!</span>`;
  container.appendChild(playerItem);
}
