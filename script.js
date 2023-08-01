const computerPlay = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

const playRound = (playerSelection, computerSelection) => {
    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();

    if (playerChoice === computerChoice) {
        return "It's a tie! Both chose " + playerSelection;
    } else if (
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
};

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Round " + i + ": Enter your choice (Rock/Paper/Scissors):");
        if (!playerSelection) {
            alert("Invalid input! Please enter Rock, Paper, or Scissors.");
            i--; 
            continue;
        }
        let computerSelection = computerPlay();
        let roundOutcome = playRound(playerSelection, computerSelection);
        alert(roundOutcome);

        if (roundOutcome.startsWith("You Win!")) playerScore += 1;
        else if (roundOutcome.startsWith("You Lose!")) computerScore += 1;
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
        console.log(`The score is :  ${playerScore} - ${computerScore} for you! `)
    } else if (playerScore < computerScore) {
        console.log(`Sorry, you lost the game! Opponent has won with a score of ${computerScore} - ${playerScore}`);
    } else {
        console.log(`The game ended in a tie! Final score  : ${computerScore} - ${playerScore}`);
    }
};
game();