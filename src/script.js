const CHOICE = ["rock", "paper", "scissors"];

function showWinner(winner){

    let message = `The winner is ${winner}`;
    
    return message;

}

function getRandomNumber(numberMax){
    let randomNumber = Math.floor(Math.random() * numberMax);
    return randomNumber;
};

let getComputerChoice = choiceComputer => CHOICE[choiceComputer];
let getHumanChoice = humanElection => CHOICE[humanElection];

function playRound (humanChoice, computerChoice) {
    if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") ){
        //Utilizo un obeto para poder devolver el mensaje y la puntuacion
        return "human";
    }else if(humanChoice === computerChoice) {
        return "draw";
    }else {
        return "computer";
    }
}

function playGame(gameRounds){
    let humanScore = 0;
    let computerScore = 0;
    let x = 0;
    let winner;

    while(x < gameRounds){
        x++
        let humanProm = prompt("Enter `Rock, Paper, scissors`").toLowerCase();
        //Es necesario utilizar indexOf para obtener el numero de indice del array y asi no tener que utilizar if y else
        const HUMAN_INDEX_CHOICE = CHOICE.indexOf(humanProm);
        const COMPUTER_ELECTION = getComputerChoice(getRandomNumber(3));
        const HUMAN_ELECTION = getHumanChoice(HUMAN_INDEX_CHOICE);
        const RESULT_ROUND = playRound(HUMAN_ELECTION, COMPUTER_ELECTION);

        console.log(showWinner(RESULT_ROUND))

        if(RESULT_ROUND) {
           
        }
    }
        /*
        if(RESULT_ROUND === "human"){
            humanScore += 1;
            winner = "human";
        }else if(RESULT_ROUND === "computer"){
            computerScore += 1;
            winner = "computer"
        }else {
            winner = "draw"
        }
        console.log(`Win ${winner}, human obtain ${humanScore} computer obtain ${computerScore}`);
    };
    let finalWinner =  
        (humanScore > computerScore) ? alert("Congratulations you won") : 
        (computerScore > humanScore) ? alert(":( you lost"): alert("Draw");
    return finalWinner; */
}
console.log(playGame(5));
