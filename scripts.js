
const Joken_options = {
    rock: 'rock',
    papper: 'papper',
    scissors: 'scissors'
}

//Identificar a escolha do player
function handleClick(playerchoice) {

    const playerChoice = playerchoice;
    console.log(`Voce escolheu: ${playerChoice}`)

    const machineChoice = machinePlay();
    console.log(`A máquina escolheu: ${Joken_options[machineChoice]}`);

    determinateWinner(playerChoice, machineChoice);



}

//Pegar a escolha da maquina
function machinePlay() {
    const choices = [Joken_options.rock, Joken_options.papper, Joken_options.scissors];
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];


    return machineChoice;
}

//Função para determinar o vencedor

//Caso de empate
function determinateWinner(playerChoice, machineChoice) {
    const resultParagraph = document.querySelector(".result")

    //pegar a pontuação atual dos jogadores
    let myScore = parseInt(document.querySelector(".HumanSpan").textContent);
    let oponentScore = parseInt(document.querySelector(".MachineSpan").textContent);




    if (playerChoice === machineChoice) {
        resultParagraph.innerHTML = "Empate!";
    }

    //O jogador vai ganhar quando
    else if (
        (playerChoice === Joken_options.rock && machineChoice === Joken_options.scissors) ||
        (playerChoice === Joken_options.papper && machineChoice === Joken_options.rock) ||
        (playerChoice === Joken_options.scissors && machineChoice === Joken_options.papper)

    ) {
        resultParagraph.innerHTML = "parabéns Você ganhou";
        myScore++;

    } else { //Caso o jogador perder
        resultParagraph.innerHTML = "Que pena você perdeu...";
        oponentScore++;
    }

    //Atualizar novos valores dos jogadores
    document.querySelector(".HumanSpan").textContent = myScore;
    document.querySelector(".MachineSpan").textContent = oponentScore;

}