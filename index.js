computerPlay = () => {
  const plays = ['Rock', 'Paper', 'Scissors']
  const computerPlay = plays[Math.floor(Math.random() * plays.length)]
  console.log(computerPlay)
}

computerPlay()
