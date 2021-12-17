const buttons = document.querySelectorAll('input')
computerSelection = () => {
  let plays = ['Rock', 'Paper', 'Scissors']
  let computerPlay = plays[Math.floor(Math.random() * plays.length)]
}

playRound = (playerSelection) => {
  let computerPlay = computerSelection()
  let result = ''
  if (
    (playerSelection == 'rock' && computerPlay == 'scissors') ||
    (playerSelection == 'scissors' && computerPlay == 'paper') ||
    (playerSelection == 'paper' && computerPlay == 'rock')
  ) {
    result =
      'You win!' + playerSelection + 'beats' + computerPlay + 'every time!'
  } else if (playerSelection == computerPlay) {
    result = 'Its a tie! Both users chose' + playerSelection
  } else {
    result =
      'You lose this time. ' + computerPlay + ' beats ' + playerSelection + '.'
  }
  document.getElementById('result').innerHTML = result
  return
}
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    playRound(button.value)
  })
})
