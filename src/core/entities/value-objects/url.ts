import { EntityValidationError } from '../errors/entity-validation-internal-error'

export class Url {
  private _value: string
  constructor(urlValue: string) {
    if (!this.validate(urlValue)) {
      throw new EntityValidationError('URL format is invalid')
    }

    this._value = urlValue
  }

  private validate(urlValue: string): boolean {
    const urlRegex =
      /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

    return urlRegex.test(urlValue)
  }

  get value() {
    return this._value
  }
}
