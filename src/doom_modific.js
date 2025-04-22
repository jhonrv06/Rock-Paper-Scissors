import { playGame } from "./gamelogic.js";

const BUTTONS = document.querySelectorAll(".container_button");
let num = 0;

export function addResultsToDoom(winner, score){
    const SCORE = document.querySelector(`#score${winner}`);
    SCORE.textContent = score;
}

function getSeleccion(e){
    let idElection = e.target.id.toLowerCase();
    playGame(5, idElection);
    
    
}

BUTTONS.forEach(button => {
    button.addEventListener("click", getSeleccion);
});





