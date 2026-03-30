const isEven = num => num % 2 === 0

export const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1
  const question = `${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}
