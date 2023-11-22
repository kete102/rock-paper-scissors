console.log("Welcome to the Rock Paper Scissors Game!");

// Player Buttons
const playerRockButton = document.getElementById("player-rock-button");
const playerPaperButton = document.getElementById("player-paper-button");
const playerScissorsButton = document.getElementById("player-scissors-button");
const playerButtons = document.querySelectorAll(".player-option");

//Computer Buttons
const computerRockButton = document.getElementById("computer-rock-button");
const computerPaperButton = document.getElementById("computer-paper-button");
const computerScissorsButton = document.getElementById(
  "computer-scissors-button"
);

//Scoreboard
const playerWinsScoreboard = document.getElementById("player-game-wins");
const computerWinsScoreboard = document.getElementById("computer-game-wins");

const game = () => {
  console.log("Let's play!");

  let playerWins = 0;
  let computerWins = 0;

  function getComputerChoice() {
    [computerRockButton, computerPaperButton, computerScissorsButton].forEach(
      (button) => {
        button.classList.remove("computer-button-selected");
      }
    );

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];

    //Color computer's choice
    if (choice === "rock") {
      computerRockButton.classList.add("computer-button-selected");
    }
    if (choice === "paper") {
      computerPaperButton.classList.add("computer-button-selected");
    }
    if (choice === "scissors") {
      computerScissorsButton.classList.add("computer-button-selected");
    }
    return choice;
  }

  function getPlayersChoice(button) {
    playerButtons.forEach((button) => {
      button.classList.remove("player-button-selected");
    });

    button.classList.add("player-button-selected");
    const choice = button.getAttribute("value");
    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
  }

  playerButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const selectedButton = event.target;
      getPlayersChoice(selectedButton);
    });
  });

  function playRound(playerChoice, computerChoice) {
    //console.log("Computer's choice is " + computerChoice);
    //console.log("Player's choice is " + playerChoice);

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      //console.log("Player wins this round!");
      playerWins++;
      playerWinsScoreboard.textContent = playerWins;
    } else if (
      (playerChoice === "scissors" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "scissors")
    ) {
      //console.log("Computer wins this round!");
      computerWins++;
      computerWinsScoreboard.textContent = computerWins;
    } else {
      //console.log("It's a tie!");
    }

    if (playerWins === 5) {
      //console.log("Player wins the game!");
      return;
    } else if (computerWins === 5) {
      //console.log("Computer wins the game!");
      return;
    }
  }
};

game();
