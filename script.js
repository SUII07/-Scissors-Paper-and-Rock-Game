// Get the game buttons
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

// Get the move display elements
const moveDisplay1 = document.querySelector(".move-display h2:first-of-type");
const moveDisplay2 = document.querySelector(".move-display h2:last-of-type");

// Add event listeners to the game buttons
rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));

// Function to play the game
function playGame(playerMove) {
  disableButtons();
  // Generate a random move for the computer
  const moves = ["Rock", "Paper", "Scissors"];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  // Display the moves
  moveDisplay1.textContent = `You Played ${playerMove}`;
  moveDisplay2.textContent = `Computer Played ${computerMove}`;

  // Determine the winner
  let result;
  if (playerMove === computerMove) {
    result = "It's a tie!";
  } else if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    result = "You win!";
  } else {
    result = "Defeat";
  }

  // Update the game status
  const statusHead = document.getElementById("status-head");
  statusHead.textContent = result;

  // Get the reload button
const reloadBtn = document.querySelector("#reload");

// Add event listener to the reload button
reloadBtn.addEventListener('click', () => {
  enableButtons();
    window.location.reload();
});

}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}


// // Store references to DOM elements
// const rockButton = document.getElementById('rock-button');
// const paperButton = document.getElementById('paper-button');
// const scissorsButton = document.getElementById('scissors-button');
// const reloadButton = document.getElementById('reload');
// const statusHead = document.getElementById('status-head');
// const moveDisplay = document.querySelector('.move-display');

// // Move options
// const moves = ['Rock', 'Paper', 'Scissors'];

// // Event listeners for game buttons
// rockButton.addEventListener('click', () => {
//   startGame('Rock');
// });

// paperButton.addEventListener('click', () => {
//   startGame('Paper');
// });

// scissorsButton.addEventListener('click', () => {
//   startGame('Scissors');
// });

// // Function to start the game
// function startGame(playerMove) {
//   disableButtons();
//   const computerMove = randomMove();
//   const result = calcResult(playerMove, computerMove);

//   displayMoves(playerMove, computerMove);
//   displayResult(result);
// }

// // Function to calculate the game result
// function calcResult(move1, move2) {
//   if (move1 === move2) {
//     return " It's a Tie";
//   } else if (
//     (move1 === 'Rock' && move2 === 'Scissors') ||
//     (move1 === 'Paper' && move2 === 'Rock') ||
//     (move1 === 'Scissors' && move2 === 'Paper')
//   ) {
//     return 'You Win!';
//   } else {
//     return "Defeat";
//   }
// }

// // Function to generate a random move
// function randomMove() {
//   const randomIndex = Math.floor(Math.random() * moves.length);
//   return moves[randomIndex];
// }

// // Function to display player and computer moves
// function displayMoves(playerMove, computerMove) {
//   moveDisplay.children[0].textContent = `You: ${playerMove}`;
//   moveDisplay.children[1].textContent = `Computer: ${computerMove}`;
// }

// // Function to display the game result
// function displayResult(result) {
//   statusHead.textContent = result;
//   reloadButton.style.display = 'block';
// }

// // Function to reload the page and play again
// function reloadPage() {
//   location.reload();
// }

// // Event listener for reload button
// reloadButton.addEventListener('click', () => {
//   reloadPage();
// });

// function disableButtons() {
//   rockButton.disabled = true;
//   paperButton.disabled = true;
//   scissorsButton.disabled = true;
// }

// function enableButtons() {
//   rockButton.disabled = false;
//   paperButton.disabled = false;
//   scissorsButton.disabled = false;
// }

