//A function wherein the cpu randomly selects between rock, paper, and scissors
function getComputerChoice(){
    const possibleChoices = ["Rock","Paper","Scissors"];
    let randomChoice = Math.floor(Math.random()*possibleChoices.length);
    let cpuChoice = possibleChoices[randomChoice];
    cpuChoice = cpuChoice.toUpperCase();
    return cpuChoice;
}

// A function that gets the player choice
function getPlayerChoice(){
    let running = true;
    while (running=true){
    let choice = prompt("Please enter your choice: rock, paper, or scissors");
    choice = choice.toUpperCase();
    if (choice == "ROCK" || choice == "SCISSORS" || choice == "PAPER"){
        running = false;
        return choice;
    }
    }
}

function playRound(){
    let cpuChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    if (playerChoice == cpuChoice){
        console.log(`I choose ${cpuChoice}`) ;
        console.log("It's a tie. Let's go again");
        return "Tie";
    }
    if (playerChoice == "ROCK"){
        if (cpuChoice == "PAPER"){
            console.log("I choose paper");
            console.log("I win this round");
            return "cpu";
        }
        else if (cpuChoice == "SCISSORS"){
            console.log("I choose scissors");
            console.log("You win this round");
            return "player";
        }
    }

    if (playerChoice == "PAPER"){
        if (cpuChoice == "SCISSORS"){
            console.log("I choose scissors");
            console.log("I win this round");
            return "cpu";
        }
        else if (cpuChoice == "ROCK"){
            console.log("I choose rock");
            console.log("You win this round");
            return "player";
        }
    }

    if (playerChoice == "SCISSORS"){
        if (cpuChoice == "ROCK"){
            console.log("I choose rock");
            console.log("I win this round");
            return "cpu";
        }
        else if (cpuChoice == "PAPER"){
            console.log("I choose paper");
            console.log("You win this round");
            return "player";
        }
    }
}

playRound();