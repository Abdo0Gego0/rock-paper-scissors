function getComputerChoice(){
    let x = Math.random() * 100;
    if (x <= 30)
        return "Rock";
    else if (x < 60 && x > 30)
        return "Paper"
    else
        return "Scissors"
}

console.log(getComputerChoice());