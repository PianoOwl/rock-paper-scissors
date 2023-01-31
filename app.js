// Game of rock paper scissors, played in the browser console

// Prompt user for choice, and convert to lower case
const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

// Get computer's choice
function getComputerChoice() {
    const possibilities = ["rock", "paper", "scissors"];
    const computerSelection = possibilities[Math.floor(Math.random() * possibilities.length)];
    
    return computerSelection;
}

computerSelection = getComputerChoice();

// Determine winner of round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("Tie! Play again");
        } else if (computerSelection == "paper") {
            console.log("You lose! Paper beats rock!");
        } else {
            console.log("You win! Rock beats scissors!");
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats rock!");
        } else if (computerSelection == "paper") {
            console.log("Tie! Play again");
        } else {
            console.log("You lose! Scissors beats paper!");
        }

    } else {
        if (computerSelection == "rock") {
            console.log("You lose! Rock beats scissors!");
        } else if (computerSelection == "paper") {
            console.log("You win! Scissors beats paper!");
        } else {
            console.log("Tie! Play again");
        }
    }

}

console.log(playerSelection);
console.log(computerSelection);

playRound(playerSelection, computerSelection);