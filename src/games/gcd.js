import { runGame } from '../index.js'

const getRandomNumber = (min = 1, max = 50) => Math.floor(Math.random() * (max - min + 1)) + min

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const description = 'Find the greatest common divisor of given numbers'

export const generateRound = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))
  return { question, correctAnswer }
}

export const runGcdGame = () => {
  runGame(description, generateRound)
}