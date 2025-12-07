let body = document.querySelector("body");
let result = document.querySelector("#result");
let humanScore = 0, computerScore = 0;

body.addEventListener("click", (event) => {
    let choice = event.target.id;

    if(choice === "rock" || choice === "paper" || choice === "scissors") {
        playRound(choice, getComputerChoice());
        if(humanScore === 5) {
            alert(`YOU WIN! :) ${humanScore}-${computerScore}`);
            resetGame();
        }
        if(computerScore === 5) {
            alert(`YOU LOST. :( ${humanScore}-${computerScore}`);
            resetGame();
        }
    }
    
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    result.innerText = "";
}


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Choose 'rock', 'paper', or 'scissors': ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        result.innerText = `It's a tie.\n${humanScore}-${computerScore}`;
    }
    else if(humanChoice === "rock" && computerChoice == "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result.innerText = `You win! ${humanChoice} beats ${computerChoice}\n${humanScore}-${computerScore}`;
    }
    else {
        computerScore++;
        result.innerText = `You lose. ${computerChoice} beats ${humanChoice}\n${humanScore}-${computerScore}`;
    }
}
