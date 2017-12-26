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

// Social Security Number (SSN)

const blackList = [
  '078-05-1120'
]

export function verify(code: string) {
  code = code.replace(/\D/g, '') // just in case

  if (code.length !== 9) return false

  const areaNumber = +code.slice(0, 3)
  const groupCode = +code.slice(3, 5)
  const serialNumber = +code.slice(5)

  if (areaNumber === 0 || groupCode === 0 || serialNumber === 0) return false

  if (areaNumber === 666) return false

  if (900 <= areaNumber) return false

  if (blackList.indexOf(code) > -1) return false

  return true
}
