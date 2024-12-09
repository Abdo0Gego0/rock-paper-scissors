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

console.log(getComputerChoice());