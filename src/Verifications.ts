import nationalId from './nationalId'
import CreditCard from './CreditCard'

export default class Verifications {
  private locale: string

  constructor(locale: string = 'IR') {
    this.locale = locale.toUpperCase()
  }

  setLocale(locale: string) {
    this.locale = locale.toUpperCase()

    return this
  }

  get nationalId(): Object {
    return nationalId[this.locale]
  }

  static CreditCard = CreditCard
}
