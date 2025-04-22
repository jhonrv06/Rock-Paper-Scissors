
const CHOICE = ["rock", "paper", "scissors"];

let players = [
    {player: "human", score: 0},
    {player: "computer", score: 0},
]

function showWinner(winner, rounds, limit){
    let message = "";

    if(winner === "draw"){
       return "empate";
    }

    //obtener el score actual y agregarle un valor
    const addPoint = players.find(p => p.player === winner);
    addPoint.score = addPoint.score + 1;

    if(rounds != limit){
        message = `The winner of raund is ${winner} human obtain ${addPoint.score} computer obtain ${players[1].score}`;
    }else{
        let winnerT = players.reduce((winner, playerActual) => {
            return playerActual.score > winner.score ? playerActual : winner
        })
        console.log(`The winner of raund is ${winner} human obtain ${addPoint.score} computer obtain ${players[1].score}`)
        console.log(`el ganador definitivo es  ${winnerT.player} con ${winnerT.score} puntos`);
    }

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
    let x = 0;
    let empate = 0;

        //Es necesario utilizar indexOf para obtener el numero de indice del array y asi no tener que utilizar if y else
        const HUMAN_INDEX_CHOICE = CHOICE.indexOf(usuarioEle);
        const COMPUTER_ELECTION = getComputerChoice(getRandomNumber(3));
        const HUMAN_ELECTION = getHumanChoice(HUMAN_INDEX_CHOICE);
        const RESULT_ROUND = playRound(HUMAN_ELECTION, COMPUTER_ELECTION);

        

        if(RESULT_ROUND === "draw") {
            gameRounds += 1;
        }

        console.log(showWinner(RESULT_ROUND, x, gameRounds))
    
}
console.log(playGame(5));
