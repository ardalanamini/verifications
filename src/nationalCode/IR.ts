export function verify(code: string) {
  const indexes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // just in case
  code = code.replace(/\D/g, '')

  if (code.length !== 10) return false

  let digits: number[] = code.split('') // spliting digits
    .map((digit: string) => +digit) // parsing digits into number type
    .reverse() // and finally reversing the array

  const onesDigit: number = digits[0]

  indexes.map((index: number) => digits[index - 1] = digits[index - 1] * index)

  let sum: number = -onesDigit
  digits.map((digit: number) => sum += digit)

  sum %= 11
  if (sum < 2) {
    if (sum === onesDigit) return true
  } else {
    sum = 11 - sum
    if (sum === onesDigit) return true
  }

  return false
}
