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
    } else if (computerMove === 'rock' && playerMove === 'scissors') {
            winner = 'player';
    } else if (computerMove === 'paper' && playerMove === 'scissors') {
            winner = 'computer';
    } else if (computerMove === 'paper' && playerMove === 'rock') {
            winner = 'computer';
    
    }        
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
//future finn: position of above console log needed to console log after each play   
    return winner;
    }

git commit -m "unit 4 homework is above"

function playToFive() {
    console.log('Let\'s play Rock Paper Scissors');
     var playerWins = 0;
     var computerWins = 0;

while (playerWins < 5 && computerWins < 5) {

    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    
     if (winner === 'player') {
           playerWins += 1;
           console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        } else if (winner === 'computer') {
           computerWins += 1;
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
        
       } else {  
        console.log("Wow, That was a tie!" + 'The score is currently ' + playerWins + ' to ' + computerWins);
    }
    }
   return [playerWins, computerWins];
    }
   
playToFive(5);

