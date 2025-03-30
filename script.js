let humanProm = prompt("Ingresa una palabra `Rock, Paper, scissors`")
const CHOICE = ["Rock", "Paper", "scissors"];
//Es necesario utilizar indexOf para obtener el indice del array y asi no tener que utilizar if y else
const HUMANINDEXCHOICE = CHOICE.indexOf(humanProm);

function getRandomNumber(numberMax){
    let randomNumber = Math.floor(Math.random() * numberMax);
    return randomNumber;
};

let getComputerChoice = choiceComputer => CHOICE[choiceComputer];
let getHumanChoice = humanElection => CHOICE[humanElection];

console.log(getComputerChoice(getRandomNumber(3)));
console.log(getHumanChoice(HUMANINDEXCHOICE));