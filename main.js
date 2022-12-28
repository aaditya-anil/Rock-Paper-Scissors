// Rock Paper Scissors
// Rock beat scissor
// Scissor beat paper
// paper beat rock


//get computer choice
function computerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}

const computerSelection = computerChoice();

function playRound(playerSelection,computerSelection){
    if (computerSelection == playerSelection){
        return "Tie";
    }
    else if (playerSelection =="rock"){
        if (computerSelection == "scissors")
            return "You Win, Rock beat Scissors";
        else
            return "You Loose, Paper beat Scissors";
    }
    else if (playerSelection =="paper"){
        if (computerSelection == "rock")
            return "You Win, Paper beat Rock";
        else
            return "You Loose, Scissors beat Paper";
    }
    else{
        if (computerSelection == "Paper")
            return "You Win, Scissor beat Paper";
        else
            return "You Loose, Paper beat Rock";
    }
}

function game(){
    point = 0;
    for (let i=0; i<5;i++){
        const playerSelection = prompt("Enter your option").toLowerCase();
        const result = playRound(playerSelection,computerSelection);
        if (result.includes("Win")){
            point++;
        }
        console.log(result);
    }
    console.log("You have "+ point + " points");
}

game();