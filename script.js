const scores = {
    player: 0,
    computer: 0,
};

const computerPlay = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerSelection, computerSelection, round = 1) => {
    const playerChoice = playerSelection.toUpperCase();
    const computerChoice = computerSelection.toUpperCase();

    const winningChoices = new Map([
        ['ROCK', 'SCISSORS'],
        ['PAPER', 'ROCK'],
        ['SCISSORS', 'PAPER'],
    ]);

    if (playerChoice === computerChoice) {
        return `It's a tie! Both chose  ${playerSelection}`;
    } else if (winningChoices.get(playerChoice) === computerChoice) {
        return `😀 You won round ${round}!  ${playerSelection}  beats  ${computerSelection}`;
    } else {
        return `😢 You Lost round ${round}!  ${computerSelection}  beats  ${playerSelection}`;
    }
};

const game = () => {
    
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Round " + i + ": Enter your choice (Rock ✊/Paper ✋/Scissors ✌️):");
        if (!playerSelection) {
            alert("❌ Invalid input! Please enter Rock, Paper, or Scissors.");
            i--;
            continue;
        }
        let computerSelection = computerPlay();
        let roundOutcome = playRound(playerSelection, computerSelection, i);
        alert(roundOutcome);

        if (roundOutcome.startsWith("You won")) scores.player += 1;
        else if (roundOutcome.startsWith("You Lost")) scores.computer += 1;
    }

    if (playerScore > computerScore) {
        alert(`😀 Congratulations! You won the game! The score is: ${scores.player} - ${scores.computer} for you!`);
    } else if (playerScore < computerScore) {
        console.log(`😢 Sorry, you lost the game! Opponent has won with a score of ${scores.computer} - ${scores.player}`);
    } else {
        console.log(`😐 The game ended in a tie! Final score: ${scores.computer} - ${scores.player}`);
    }
};

game();
