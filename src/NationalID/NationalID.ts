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
import * as UK from './UK'
import * as US from './US'

const locales: { [key: string]: any } = {
  IR,
  UK,
  US
}

// @see https://en.wikipedia.org/wiki/National_identification_number
export default class NationalId {
  static get locales() {
    return Object.keys(locales)
  }

  static verify(code: string, locale?: string) {
    if (locale) {
      if (NationalId.locales.indexOf(locale) === -1) throw new Error('used locale is not supported')

      locale = locale.toUpperCase()

      return locales[locale].verify(code)
    }

    for (let l in locales) {
      if (locales[l].verify()) return true
    }

    return false
  }
}
