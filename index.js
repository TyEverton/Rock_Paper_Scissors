computerSelection = () => {
  let plays = ['Rock', 'Paper', 'Scissors']
  let computerPlay = plays[Math.floor(Math.random() * plays.length)]
  console.log(computerPlay)
}

playRound = (playerSelection) => {
  let computerPlay = computerSelection()
  if (computerPlay == playerSelection) {
    console.log('Tie game!')
  } else if (computerPlay == 'rock' && playerSelection == 'scissors') {
    console.log("Computer's rock took our your scissors!")
  } else if (computerPlay == 'paper' && playerSelection == 'rock') {
    console.log("Computer's paper just covered your rock!")
  } else if (computerPlay == 'scissors' && playerSelection == 'paper') {
    console.log('Computer cuts right through your paper!')
  }
}

playRound()


