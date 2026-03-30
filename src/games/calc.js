const getRandomNumber = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min

const operations = [
  { symbol: '+', compute: (a, b) => a + b },
  { symbol: '-', compute: (a, b) => a - b },
  { symbol: '*', compute: (a, b) => a * b },
]

export const generateRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operation = operations[Math.floor(Math.random() * operations.length)]

  const question = `${num1} ${operation.symbol} ${num2}`
  const correctAnswer = String(operation.compute(num1, num2))
  return { question, correctAnswer }
}
