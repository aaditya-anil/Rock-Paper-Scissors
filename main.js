// Rock Paper Scissors
// Rock beat scissor
// Scissor beat paper
// paper beat rock


//get computer choice
function computerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerSelection,computerSelection){
    if (computerSelection === playerSelection) {
        return "Tie";
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (winConditions[playerSelection] === computerSelection) {
        return `You Win, ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose, ${computerSelection} beats ${playerSelection}`;
    }
}

function game(playerSelection){
    var point = 0;

    var computerSelection = computerChoice();
    var result = playRound(playerSelection,computerSelection);

    if (result.includes("Win")){
        point++;
    }
       
    var divOfGameWinOrLose = document.getElementById('game-win-lose-element');
    var gameWinLoseText = divOfGameWinOrLose.querySelector('h1');
    gameWinLoseText.textContent = result;
        
    var divOfPointsElement = document.getElementById('points-element')
    var pointsElement = divOfPointsElement.querySelector('h2');
    pointsElement.textContent = "Points: " + point;
}

