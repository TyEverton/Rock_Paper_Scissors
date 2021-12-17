const buttons = document.querySelectorAll('input')

computerPlay = () => {
  let plays = ['rock', 'paper', 'scissors']
  return plays[Math.floor(Math.random() * plays.length)]
  console.log(plays)
}

playRound = (playerSelection) => {
  let computerSelection = computerPlay()
  let result = ''
  if (playerSelection == computerSelection) {
    result = 'Tie game!'
  } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
    result = 'Your rock just took out the computers scissors!'
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
    result = 'Nice job! You beat the computer!'
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
    result = 'You win! Scissors overpower the computers paper.'
  }
  document.getElementById('result').innerHTML = result
  return
}

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    playRound(button.value)
  })
})
