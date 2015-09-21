////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	return move || ‘getInput ()’;
}

function getComputerMove(move) {
    return move || 'randomPlay()';
}

git commit -m "unit 3 homework is above"

getWinner(playerMove)
function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove === computerMove){
            winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
            winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
            winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
            winner = 'computer';
    }
    return winner;
}

git commit -m "unit 4 homework is above"

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

