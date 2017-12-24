export function verify(code: string) {
  code = code.replace(/\D/g, '') // just in case

  if (code.length !== 10) return false

  const digits: number[] = code.split('') // spliting digits
    .map((digit: string) => +digit) // parsing digits into number type
    .reverse() // and finally reversing the array

  const onesDigit: number = digits[0]

  let sum: number = -onesDigit

  digits.map((digit: number, index: number) => sum += digit * (index + 1))

  sum %= 11

  if (sum < 2) {
    if (sum === onesDigit) return true
  } else {
    sum = 11 - sum

    if (sum === onesDigit) return true
  }

  return false
}
