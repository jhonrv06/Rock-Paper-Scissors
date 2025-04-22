import { playGame } from "./gamelogic.js";

const BUTTONS = document.querySelectorAll(".container_button");
const CONTAINERBUTTONS = document.querySelector(".container_buttons");
const CONTAINER = document.querySelector(".container");
const TEXTRESULT = document.querySelector(".container_text:nth-child(1)");
const TEXTROUND = document.querySelector(".container_text:nth-child(2)");
let round = 0;


export function endGame(winnerFinal){
    CONTAINER.removeChild(CONTAINERBUTTONS);
    if(winnerFinal === "human"){
       TEXTRESULT.textContent = `!CONGRATULATIONS you won`;
    }else{
        TEXTRESULT.textContent = `You lost :( `;
    }
}

export function addResultsToDoom(winner, score){
    TEXTROUND.textContent = `Round ${round += 1}`

    if(winner === "draw"){
        TEXTRESULT.textContent = "Draw";    
        return
    }
    const SCORE = document.querySelector(`#score${winner}`);
    const SPANWINER = document.createElement("span");

    SCORE.textContent = score;
    SPANWINER.textContent = winner;
    SPANWINER.className = `span--${winner}`;


    
    TEXTRESULT.textContent = `The winner of round is `
    TEXTRESULT.append(SPANWINER);
}

function getSeleccion(e){
    let idElection = e.target.id.toLowerCase();
    playGame(5, idElection);
}

BUTTONS.forEach(button => {
    button.addEventListener("click", getSeleccion);
});





