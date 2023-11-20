console.log("Welcome to the Rock Paper Scissors Game!");

const game = () => {
  console.log("Let's play!");
  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < 3 && computerWins < 3) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    playRound(playerChoice, computerChoice);
  }

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    console.log("Computer's choice is " + choice);
    return choice;
  }

  function getPlayerChoice() {
    //let choice = prompt("Please choose rock, paper, or scissors: ");
    console.log("Your choice is " + choice.toLowerCase());
    return choice.toLowerCase();
  }

  function playRound(playerChoice, computerChoice) {
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win this round!");
      playerWins++;
    } else if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else {
      console.log("You lose this round!");
      computerWins++;
    }
    console.log(`Player: ${playerWins} - Computer: ${computerWins}`);
  }

  console.log(`The winner is ${playerWins === 3 ? "player" : "computer"}.`);
};

game();
