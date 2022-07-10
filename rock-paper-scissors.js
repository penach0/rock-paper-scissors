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

//Start the UI

const buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach((button) => button.addEventListener('click', function(e){
    console.log(playRound( button.id, computerPlay()))
    })
);

//Started the UI commented out the 5 round function for later

/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let result = playRound(prompt("Rock, Paper, Scissors, shoot! : "), computerPlay());
        console.log(result);
        if (result.includes("Win")){
            playerScore++;
        } else if (result.includes("Lose")){
            computerScore++;
        }
    }
    let winner;
    if (playerScore === computerScore){
        winner = "It\'s a tie!";
    } else if (playerScore > computerScore){
        winner = "Player!!";
    } else {
        winner = "Computer!!";
    }

    console.log(`The final result is: 
                Player: ${playerScore}
                Computer: ${computerScore}
The Winner is: ${winner}`);

}*/

//game();