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
    alert(`In a hidden realm, three powerful beings played "The Game of the Elements."
    Rock, Paper, and Scissors clashed with magical energy, captivating the kingdom.
    Each element won and lost, teaching unity's value.
    Their enchanting dance continues, celebrating the magic in diversity.
    Enjoy the mystical tale of "The Game of the Elements"! 🌟🪨✋✌️`);
    
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

        if (roundOutcome.startsWith("😀")) scores.player ++;
        else if (roundOutcome.startsWith("😢")) scores.computer++;
    }
     
    if (scores.player > scores.computer) {
        alert(`😀 Congratulations! You won the game! The score is: ${scores.player} - ${scores.computer} for you!`);
    } else if (scores.player < scores.computer) {
        alert(`😢 Sorry, you lost the game! Opponent has won with a score of ${scores.computer} - ${scores.player}`);
    } else {
        alert(`😐 The game ended in a tie! Final score: ${scores.computer} - ${scores.player}`);
    }
};

game();
