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
            return("It\'s a draw! Play again");
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
