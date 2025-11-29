function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Choose 'rock', 'paper', or 'scissors': ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "It's a tie.";
    }
    if(humanChoice === 'rock' && computerChoice == 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }

    computerScore++;
    return `You lose! ${humanChoice} beats ${computerChoice}`;
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice) {
            return "It's a tie.";
        }
        if(humanChoice === 'rock' && computerChoice == 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }

        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    for(let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    console.log(humanScore + " " + computerScore);
}

playGame();

