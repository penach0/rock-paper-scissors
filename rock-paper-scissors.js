function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let pick = options[Math.floor(Math.random() * options.length)];
    return pick;
    ;
}

console.log(computerPlay());