function computerPlay () {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie';
    } else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else {
            return 'You Win! Paper beats Rock';
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Win! Scissors beats Paper';
        }
    }
}

function game() {
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (rounds < 5) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === 'You Win! Rock beats Scissors') {
            playerScore++;
        } else if (result === 'You Win! Paper beats Rock') {
            playerScore++;
        } else if (result === 'You Win! Scissors beats Paper') {
            playerScore++;
        } else if (result === 'You Lose! Paper beats Rock') {
            computerScore++;
        } else if (result === 'You Lose! Scissors beats Paper') {
            computerScore++;
        } else if (result === 'You Lose! Rock beats Scissors') {
            computerScore++;
        } else if (result === 'Tie') {   
        }

        console.log(result);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(" ");
        rounds++;
        
        while (rounds === 5) {
            if (playerScore > computerScore) {
                console.log('You Win!');
            } else if (playerScore < computerScore) {
                console.log('You Lose!');
            } else {
                console.log('Tie!');
            }
            rounds++;
        }
    }
}

game();