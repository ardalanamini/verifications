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
