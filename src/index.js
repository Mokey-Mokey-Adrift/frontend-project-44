import readlineSync from 'readline-sync'

const maxRounds = 3

export const runGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  for (let i = 0; i < maxRounds; i += 1) {
    const { question, correctAnswer } = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      process.exit(1)
    }
  }

  console.log(`Congratulations, ${name}!`)
  process.exit(0)
}
