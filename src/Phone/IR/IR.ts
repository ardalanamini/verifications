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

import Phone from '../Phone'
import { range } from '../../utils'
import * as landlines from './landlines.json'
import * as mobiles from './mobiles.json'

const isMobile = (number: string) => /^9/.test(number)

const normalize = (number: string) => Phone.normalize(number).slice(2)

export function fancy(number: string) {
  number = normalize(number)

  if (number.length !== 10) return number

  if (isMobile(number)) return `(${number.substr(0, 3)}) ${number.substr(3, 3)} ${number.substr(6)}`

  return `(${number.substr(0, 2)}) ${number.substr(2, 4)} ${number.substr(6, 3)}`
}

export function identify(number: string) {
  number = normalize(number)

  if (number.length !== 10) return undefined

  if (isMobile(number)) return identifyMobile(number)

  return identifyLandline(number)
}

function identifyLandline(number: string) {
  let identity = {
    type: 'Landline'
  }

  for (let code in landlines) {
    if ((new RegExp(`^${code}`)).test(number)) return {
      ...identity,
      province: landlines[code]
    }
  }

  return undefined
}

function identifyMobile(number: string) {
  let providers: { [key: string]: any } = {}
  let identity = {
    type: 'Mobile'
  }

  mobiles.map((mobile: { [key: string]: any }) => {
    mobile.identifiers.map((identifier: string) => {
      if (/~/g.test(identifier)) {
        range(...identifier.split('~').map((number: string) => +number))
          .map((number: number) => providers[`${number}`] = mobile.provider)
      } else {
        providers[identifier] = mobile.provider
      }
    })
  })

  for (let code of Object.keys(providers).sort((a, b) => +b - +a)) {
    if ((new RegExp(`^${code}`)).test(number)) return {
      ...identity,
      provider: providers[code]
    }
  }

  return undefined
}
