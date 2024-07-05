// Rock Paper Scissors
// Rock beat scissor
// Scissor beat paper
// paper beat rock
var yourPoint = 0;
var computerPoints = 0;

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
        return 'You Win';
    } else {
        return 'You Lose';
    }
}

function updatePoints(result) {
    
    if (result.includes('user')) {
        var userPointsElement = document.getElementById('user-points-element');
        yourPoint++;
        userPointsElement.textContent = "YOU " + yourPoint;
    }
    else{
        var computerPointsElement = document.getElementById('computer-points-element');
        computerPoints++;
        computerPointsElement.textContent = "COMPUTER " + computerPoints;
    }
}

function updateImage(computerSelection){
    var computerOptionImageElement = document.getElementById('imageToDisplay')

    if (computerSelection.includes('paper')) {
        computerOptionImageElement.src = 'img/ComputerChosesPaper.png'  
    }
    else if (computerSelection.includes('rock')) {
        computerOptionImageElement.src = 'img/ComputerChosesRock.png'  
    }
    else {
        computerOptionImageElement.src = 'img/ComputerChosesScissors.png'  
    } 

}

function game(playerSelection){

    var computerSelection = computerChoice();
    var result = playRound(playerSelection,computerSelection);

    updateImage(computerSelection)

    if (result.includes("Win")){
        updatePoints('user');
    }
    else if (result.includes("Lose")){
        updatePoints('computer')
    }
       
    var divOfGameWinOrLose = document.getElementById('game-win-lose-element');
    var gameWinLoseText = divOfGameWinOrLose.querySelector('p');
    gameWinLoseText.textContent = result;
        
    
}

