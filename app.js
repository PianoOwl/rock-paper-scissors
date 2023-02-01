// Game of rock paper scissors, played in the browser console

game();

// Determine winner of round
function playRound() {
    outcome = "";

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            outcome = "Tie! Play again";
        } else if (computerSelection == "paper") {
            outcome = "You lose! Paper beats rock!";
        } else {
            outcome = "You win! Rock beats scissors!";
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            outcome = "You win! Paper beats rock!";
        } else if (computerSelection == "paper") {
            outcome = "Tie! Play again";
        } else {
            outcome = "You lose! Scissors beats paper!";
        }

    } else {
        if (computerSelection == "rock") {
            outcome = "You lose! Rock beats scissors!";
        } else if (computerSelection == "paper") {
            outcome = "You win! Scissors beats paper!";
        } else {
            outcome = "Tie! Play again";
        }
    }
    console.log(outcome);
    return outcome;
}

// Get computer's choice
function getComputerChoice() {
    const possibilities = ["rock", "paper", "scissors"];
    computerSelection = possibilities[Math.floor(Math.random() * possibilities.length)];
    
    return computerSelection;
}

// Get users choice, and convert to lower case
function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
}

function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    
    for (let i = 0; i < 5; i++) {
        playRound();
        if (outcome.includes("win")) {
            wins++;
        } else if (outcome.includes("lose")) {
            losses++;
        } else {
            ties++;
        }
    }
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Ties: " + ties)
    if (wins > losses) {
        console.log("Congratulations! You won!")
    } else if (wins < losses) {
        console.log("Oh no! You lost!")
    } else {
        ("You tied!")
    }
}