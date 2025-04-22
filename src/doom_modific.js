import { playGame } from "./gamelogic.js";

const buttons = document.querySelectorAll(".container_button");
let num = 0;

function getSeleccion(e){
    let idElection = e.target.id.toLowerCase();
    playGame(idElection)

}


buttons.forEach(button => {
    button.addEventListener("click", getSeleccion);
});





