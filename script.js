const scores = {
    player: 0,
    computer: 0,
};
let playAgain = false;
const yesRegex = /^(?:yes|yeah|yup|y)$/i;
const noRegex = /^(?:no|nope|n)$/i;
const choices = ['rock', 'paper', 'scissors'];
const computerPlay = () => {
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
    let capitalizedComputerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1,computerChoice.length).toLowerCase(); 
    let capitalizedPlayerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1,playerChoice.length).toLowerCase(); 
     if (playerChoice === computerChoice) {
        return `It's a tie! Both chose  ${playerSelection}`;
    } else if (winningChoices.get(playerChoice) === computerChoice) {
        console.log(capitalizedComputerChoice)
        return `😀 You won round ${round}!  ${capitalizedPlayerChoice}  beats  ${capitalizedComputerChoice}!`;
    } else {
        console.log(capitalizedComputerChoice)
        return `😢 You Lost round ${round}!  ${capitalizedComputerChoice}   beats  ${capitalizedPlayerChoice}!`;
    }
};

const game = () => {
    alert(`In a hidden realm, three powerful beings played "The Game of the Elements."
    Rock, Paper, and Scissors clashed with magical energy, captivating the kingdom.
    Each element won and lost, teaching unity's value.
    Their enchanting dance continues, celebrating the magic in diversity.
    Enjoy the mystical tale of "The Game of the Elements"! 🌟🪨✋✌️`);
    
    for (let i = 1; i <= 5; i++) {
        if(playAgain) {
          scores.player = 0;
          scores.computer = 0;
          playAgain = false;
        }
        let playerSelection = prompt("Round " + i + ": Enter your choice (Rock ✊/Paper ✋/Scissors ✌️):");
        if (!playerSelection || !choices.includes(playerSelection.toLowerCase())) {
            alert("❌ Invalid input! Please enter Rock, Paper, or Scissors.");
            i--;
            continue;
        }
        let computerSelection = computerPlay();
        let roundOutcome = playRound(playerSelection, computerSelection, i);
        alert(roundOutcome);

        if (roundOutcome.startsWith("😀")) 
        {
            ++scores.player;
            alert(`📊 Current score in round ${i} is ${scores.player} - ${scores.computer}`)
        } 
        else if (roundOutcome.startsWith("😢")) ++scores.computer;
    }
     
    if (scores.player > scores.computer) {
        alert(`😀 Congratulations! You won the game! The score is: ${scores.player} - ${scores.computer} for you!`);
    } else if (scores.player < scores.computer) {
        alert(`😢 Sorry, you lost the game! Opponent has won with a score of ${scores.computer} - ${scores.player}`);
    } else {
        alert(`😐 The game ended in a tie! Final score: ${scores.computer} - ${scores.player}`);
    }
    let answer = prompt("Would you like to play again ?");
    if(answer===null) 
    {
      alert("Thanks for playing!");
      return;
    }
    if(yesRegex.test(answer))
    {
     playAgain = true;
     game();
     return;
    }
    else if(noRegex.test(answer))
    {
     alert("Thanks for playing!");   
     return;
    }
    else {
     alert("Invalid input. Please enter Yes or No.");
    }
};

game();
