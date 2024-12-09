function getComputerChoice(){
    let x = Math.random() * 100;
    if (x <= 30)
        return "Rock";
    else if (x < 60 && x > 30)
        return "Paper"
    else
        return "Scissors"
}
function getHumanChoice(){
    let x = prompt("Enter Rock or Paper or Scissors","Rock");
    x= x.toLowerCase();
    switch(x){
        case "rock":
            return "Rock";
            break;
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return 0;

    }
}
function playRound(playerChoice , computerChoice){
    if (
    (playerChoice === "Rock"     && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper"   ) ||
    (playerChoice === "Paper"    && computerChoice === "Rock"    )
    ) {
        return "You Win";
    }
    else if (
    (computerChoice === "Rock"     && playerChoice === "Scissors") ||
    (computerChoice === "Scissors" && playerChoice === "Paper"   ) ||
    (computerChoice === "Paper"    && playerChoice === "Rock"    )
    ){
        return `You Lose! ${computerChoice} Beats ${playerChoice}`;
    }
    else{
        return "Your Input Not Valid";
    }
}

let player = 0;
let cpu = 0;
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice,computerChoice));