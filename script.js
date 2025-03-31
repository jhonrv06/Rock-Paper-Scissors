let humanProm = prompt("Ingresa una palabra `Rock, Paper, scissors`").toLowerCase();
let humanScore = 0;
let computerScore = 0;
const CHOICE = ["rock", "paper", "scissors"];
//Es necesario utilizar indexOf para obtener el indice del array y asi no tener que utilizar if y else
const HUMAN_INDEX_CHOICE = CHOICE.indexOf(humanProm);

function getRandomNumber(numberMax){
    let randomNumber = Math.floor(Math.random() * numberMax);
    return randomNumber;
};

let getComputerChoice = choiceComputer => CHOICE[choiceComputer];
let getHumanChoice = humanElection => CHOICE[humanElection];

const COMPUTER_ELECTION = getComputerChoice(getRandomNumber(3));
const HUMAN_ELECTION = getHumanChoice(HUMAN_INDEX_CHOICE);

function playRound (humanChoice, computerChoice) {
    if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") ){
        humanScore = humanScore + 1;
        return `humano saca ${humanChoice} y computadora saca ${computerChoice} gana el humano, ${humanScore} punto para el humano`;
    }else if(humanChoice === computerChoice) {
        return `humano saca ${humanChoice} y computadora saca ${computerChoice} es un empate`;
    }else {
        computerScore = computerScore + 1;
        return `computadora saca ${computerChoice} y humano saca ${humanChoice} gana la computadora, ${computerScore} punto para la computadora`;
    }
}


console.log(playRound(HUMAN_ELECTION,COMPUTER_ELECTION));

/*
console.log(getComputerChoice(getRandomNumber(3)));
console.log(getHumanChoice(HUMAN_INDEX_CHOICE)); */