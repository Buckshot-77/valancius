import { EntityValidationError } from '../errors/entity-validation-internal-error'

export class Email {
  private _value: string

  constructor(emailString: string) {
    if (!Email.isValid(emailString)) {
      throw new EntityValidationError('Email format is invalid')
    }
    this._value = emailString
  }

  toString() {
    return this._value
  }

  static isValid(email: string): boolean {
    const emailRegex = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/

    return emailRegex.test(email)
  }
}
