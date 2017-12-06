interface Banks {
  [key: string]: {
    name: string
    alias: string
    website: string
  }
}

const banks: Banks = {
  '03799': {
    name: 'Bank Melli Iran',
    alias: 'BMI',
    website: 'https://bmi.ir'
  },
  '89210': {
    name: 'Bank Sepah',
    alias: 'BS',
    website: 'https://www.ebanksepah.ir'
  },
  '27648': {
    name: 'Export Development Bank of Iran',
    alias: 'EDBI',
    website: 'https://www.edbi.ir'
  },
  '27961': {
    name: 'Bank of Industry and Mine',
    alias: 'BIM',
    website: 'http://www.bim.ir'
  },
}

const cardTypes = {
  '3': 'travel', // travel & entertainment
  '5': 'bank', // bank or financial institution
  '6': 'bank' // bank or financial institution
}

/**
 *
 * @see http://www.aliarash.com/article/creditcart/credit-debit-cart.htm
 */
export function verify(code: string) {
  const indexes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  let digits: number[] = code.replace(/\D/g, '') // just in case
    .split('') // spliting digits
    .map((digit: string) => +digit) // parsing digits into number type

  if (digits.length !== 16) return false

  const onesDigit: number = digits[0]

  indexes.map((index: number) => {
    if (index % 2 === 1) {
      digits[index - 1] *= 2
      if (digits[index - 1] > 9) digits[index - 1] -= 9
    }
  })

  let sum: number = 0
  digits.map((digit: number) => sum += digit)

  return sum % 10 === 0
}

export function identify(code: string) { }
