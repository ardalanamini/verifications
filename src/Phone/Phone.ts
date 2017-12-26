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

import * as IR from './IR'
import * as countries from './countries.json'

const locales: { [key: string]: any } = {
  IR
}

const getCountry = (number: string) => {
  for (let code of Object.keys(countries).sort((a, b) => +b - +a)) {
    if ((new RegExp(`^${code}`)).test(number)) return countries[code]
  }

  return undefined
}

export default class Phone {
  static identify(number: string) {
    number = Phone.normalize(number)

    let country = getCountry(number)

    if (country) {
      let locale = locales[country.alias]

      if (locale) {
        let identity = locale.identify(number)

        if (identity) return { ...identity, country }
      }
    }

    return undefined
  }

  static fancy(number: string) {
    number = Phone.normalize(number)

    let country = getCountry(number)

    if (country && locales[country.alias]) return `+${number.substr(0, 2)} ${locales[country.alias].fancy(number)}`

    return number
  }

  static country(number: string) {
    number = Phone.normalize(number)

    return getCountry(number)
  }

  static normalize(number: string) {
    number = number.replace(/\D/g, '')

    if (/^0{2}/.test(number)) number = number.slice(2)

    return number
  }
}
