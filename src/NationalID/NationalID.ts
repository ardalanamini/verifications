import * as IR from './IR'
import * as US from './US'

const locales: { [key: string]: any } = {
  IR,
  US
}

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
