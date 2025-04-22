
const CHOICE = ["rock", "paper", "scissors"];
let rounds = 0;

let players = [
    {player: "human", score: 0},
    {player: "computer", score: 0},
]

function showWinner(winner){
    let message = "";

    if(winner === "draw"){
       return "empate";
    }

    //obtener el score actual y agregarle un valor
    const addPoint = players.find(p => p.player === winner);
    addPoint.score = addPoint.score + 1;

    rounds += 1

    if(rounds === 5){
        let winnerT = players.reduce((winner, playerActual) => {
            return playerActual.score > winner.score ? playerActual : winner
        })
       message =  `el ganador definitivo es  ${winnerT.player} con ${winnerT.score} puntos`;
    }

    message = `The winner of round is ${winner}, 1 point for  ${winner}, total ${addPoint.score} points. 
    Human: ${players[0].score} 
    Computer: ${players[1].score}`;


    return message;
};


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

export function playGame(gameRounds, usuarioEle){
        //Es necesario utilizar indexOf para obtener el numero de indice del array y asi no tener que utilizar if y else
        const HUMAN_INDEX_CHOICE = CHOICE.indexOf(usuarioEle);
        const HUMAN_ELECTION = getHumanChoice(HUMAN_INDEX_CHOICE);
        const COMPUTER_ELECTION = getComputerChoice(getRandomNumber(3));
        const RESULT_ROUND = playRound(HUMAN_ELECTION, COMPUTER_ELECTION);

        console.log(showWinner(RESULT_ROUND))
    
}
//console.log(playGame(5));
