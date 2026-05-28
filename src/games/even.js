const isEven = num => num % 2 === 0

export const description = 'Answer "yes" if the number is even, otherwise answer "no"'

export const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const question = `${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export const runEvenGame = () => {
  import('../index.js').then(({ runGame }) => {
    runGame(description, generateRound)
  })
}