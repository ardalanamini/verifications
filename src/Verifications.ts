import nationalCode from './nationalCode'
import creditCard from './creditCard'

export default class Verifications {
  private locale: string

  constructor(locale: string = 'IR') {
    this.locale = locale.toUpperCase()
  }

  setLocale(locale: string) {
    this.locale = locale.toUpperCase()

    return this
  }

  get nationalCode(): Object {
    return nationalCode[this.locale]
  }

  get creditCard(): Object {
    return creditCard[this.locale]
  }
}
