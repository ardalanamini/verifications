//
// MIT License
//
// Copyright (c) 2017 Ardalan Amini
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

import * as issuers from './issuers.json'
import * as types from './types.json'
import { range } from '../utils'

export interface Issuer {
  identifiers: Array<string>
  lengths: Array<string>
  name: string
  alias: string | null
  website: string | null
}

/**
 * using Luhn Algorithm
 */
function verify(code: string): boolean {
  const luhnArr = [
    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ]

  const digits: number[] = code.split('') // spliting digits
    .map((digit: string) => +digit) // parsing digits into number type

  let sum: number = 0

  digits.map((digit: number, index: number) => {
    sum += luhnArr[(digits.length - index) & 1][digit]
  })

  return (sum % 10 === 0) && (sum > 0)
}

function type(code: string): string | undefined {
  return types[code[0]]
}

function lengths(issuer: Issuer): Array<number> {
  let lengths: Array<number> = []

  issuer.lengths.map((length) => {
    if (/~/g.test(length)) {
      let arr = length.split('~').map((number: string) => +number)

      lengths.push(...range(...arr))
    } else {
      lengths.push(+length)
    }
  })

  return lengths
}

function identifiers(issuer: Issuer): Array<string> {
  let identifiers: Array<string> = []

  issuer.identifiers.map((identifier) => {
    if (/~/g.test(identifier)) {
      let arr = identifier.split('~').map((number: string) => +number)

      identifiers.push(...range(...arr).map((number: number) => `${number}`))
    } else {
      identifiers.push(identifier)
    }
  })

  return identifiers
}

function issuer(code: string, digits: number = 6): Partial<Issuer> | undefined {
  let result: Partial<Issuer> | undefined;

  if (digits > 0) {
    for (let issuer of issuers) {
      const ids: Array<string> = identifiers(issuer)
      const ls: Array<number> = lengths(issuer)

      if (ids.indexOf(code.slice(0, digits)) > -1 && ls.indexOf(code.length) > -1) {
        result = issuer
      }
    }

    if (!result) result = issuer(code, --digits)
    else result = {
      name: result.name,
      alias: result.alias,
      website: result.website,
    }
  }

  return result
}

export default class CreditCard {
  static verify(code: string) {
    code = code.replace(/\D/g, '') // just in case

    return verify(code)
  }

  static identify(code: string) {
    code = code.replace(/\D/g, '') // just in case

    const valid = verify(code)

    return valid ? {
      type: type(code),
      issuer: issuer(code)
    } : undefined
  }

  static type(code: string): string | undefined {
    code = code.replace(/\D/g, '') // just in case

    return verify(code) ? type(code) : undefined
  }

  static issuer(code: string): Partial<Issuer> | undefined {
    code = code.replace(/\D/g, '') // just in case

    return verify(code) ? issuer(code) : undefined
  }
}
