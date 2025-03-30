function getRandomNumber(numberMax){
    let randomNumber = Math.floor(Math.random() * numberMax);
    return randomNumber;
};

console.log(getRandomNumber(3))

function getComputerChoice(choiceComputer){
    let choice = ["Rock", "Paper", "scissors"];
    return choice[choiceComputer];
};

console.log(getComputerChoice(getRandomNumber(3)));