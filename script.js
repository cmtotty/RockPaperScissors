//A function wherein the cpu randomly selects between rock, paper, and scissors
function getComputerChoice(){
    const possibleChoices = ["Rock","Paper","Scissors"];
    let randomChoice = Math.floor(Math.random()*possibleChoices.length);
    let cpuChoice = possibleChoices[randomChoice];
    return cpuChoice;
}