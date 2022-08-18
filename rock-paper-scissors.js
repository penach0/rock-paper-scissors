function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let pick = options[Math.floor(Math.random() * options.length)];
    return pick;
    ;
}

function playRound(playerSelection, computerSelection){
    let playerInsensitive = playerSelection[0].toUpperCase() + (playerSelection.toLowerCase()).slice(1);

    switch (true) {
        case computerSelection === playerInsensitive:
            return("It\'s a draw!");
            break;
        case (computerSelection === 'Rock') && (playerInsensitive === 'Paper'):
            return("You Win! Paper beats Rock");
            break;
        case (computerSelection === 'Rock') && (playerInsensitive === 'Scissors'):
            return("You Lose! Rock beats Scissors");
            break;
        case (computerSelection === 'Paper') && (playerInsensitive === 'Rock'):
            return("You Lose! Paper beats Rock");
            break;
        case (computerSelection === 'Paper') && (playerInsensitive === 'Scissors'):
            return("You Win! Scissors beats Paper");
            break;
        case (computerSelection === 'Scissors') && (playerInsensitive === 'Rock'):
            return("You Win! Rock beats Scissors");
            break;
        case (computerSelection === 'Scissors') && (playerInsensitive === 'Paper'):
            return("You Lose! Scissors beats Paper");
            break;
        default:
            return("Please enter a valid option.");
    } 
}

function game(result){

    if(playerScore < 5 && computerScore < 5){
        if (result.includes("Win")){
            playerScore++;
        } else if (result.includes("Lose")){
            computerScore++;
        }
    }

    runningScore.textContent = (`Player: ${playerScore} Computer: ${computerScore}`);

    if (playerScore === 5){
        runningScore.textContent = runningScore.textContent + "\n The winner is Player!!";
    } else if (computerScore === 5){
        runningScore.textContent = runningScore.textContent + "\n The winner is Computer!!";
    }

    return(runningScore.textContent)
}

function playOnClick(e){
    result = playRound(e.target.id, computerPlay());
    roundResult.textContent = result;
    game(result);

    if(playerScore === 5 || computerScore === 5) {
        buttons.forEach((button) => button.removeEventListener('click', playOnClick));
    }
}

//Start the UI

const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('results');
const roundResult = document.createElement('p');
const runningScore = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => button.addEventListener('click', playOnClick));


resultDiv.appendChild(roundResult);
resultDiv.appendChild(runningScore);

