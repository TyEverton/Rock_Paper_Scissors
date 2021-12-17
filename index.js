const buttons = document.querySelectorAll('input')

computerSelection = () => {
  let plays = ['Rock', 'Paper', 'Scissors']
  return plays[Math.floor(Math.random() * plays.length)]
}
computerSelection()
// playRound = (playerSelection) => {
//   let computerPlay = computerSelection()
//   let result = ''
//   if (playerSelection == computerSelection) {
//     result = 'Tie game!'
//   } else if (computerPlay == 'rock' && playerSelection == 'scissors') {
//     result = 'Your rock just took out the computers scissors!'
//   } else if (computerPlay == 'paper' && playerSelection == 'rock') {
//     result = 'Nice job! You beat the computer!'
//   } else if (computerPlay == 'scissors' && playerSelection == 'paper') {
//     result = 'You win! Scissors overpower the computers paper.'
//   }
// }

// buttons.forEach((button) => {
//   button.addEventListener('click', function () {
//     playRound(button.value)
//   })
// })
computerSelection()
