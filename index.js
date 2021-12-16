computerSelection = () => {
  const plays = ['Rock', 'Paper', 'Scissors']
  const computerPlay = plays[Math.floor(Math.random() * plays.length)]
  console.log(computerPlay)
}

playerSelection = () => {
  const plays = ['Rock', 'Paper', 'Scissors']
}

playRound = (computerSelection, playerSelection) => {
  computerSelection = computerSelection()
  playerSelection = playerSelection()
  if (computerSelection == playerSelection) {
    console.log("Tie game!")
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") {
      console.log("Computer wins this time!")
    } else if {

    (computerSelection == "paper" && playerSelection == "scissors")   }
     }
    else if {
      
    }
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {

  }
