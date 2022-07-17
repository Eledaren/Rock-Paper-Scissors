let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true
  })
}

function playRound(playerSelection) {
  let computerSelection = computerPlay()
  let result = ""

  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    
    if (playerScore < 5) {
      playerScore += 1
      result = (`You win! ${playerSelection} beats ${computerSelection}`)

    } else {
      result += 'You won the game! <br> You Can Live... For Now!!'
      document.getElementById('result').style.color = 'blue'
      disableButtons()
    }
  }
  else if (playerSelection == computerSelection) {
    result = (`It's a tie. You both chose ${playerSelection}`)
  }
  else {
    if (computerScore < 5) { 
      computerScore += 1
      result = (`You lose! ${computerSelection} beats ${playerSelection}`)
    } else {
      result += 'I won the game! <br> Now You Are Dead!!'
      document.getElementById('result').style.color = 'red'
      disableButtons()
    }
  }

  document.getElementById('playerScore').innerHTML = playerScore
  document.getElementById('computerScore').innerHTML = computerScore
  document.getElementById('result').innerHTML = result

  return
}

buttons.forEach(button =>{
  button.addEventListener('click', function(){
    playRound(button.value)
  })
})