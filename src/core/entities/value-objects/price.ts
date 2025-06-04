export class Price {
  private _internalValueInCents: number

  constructor(givenValue: number) {
    if (Number.isInteger(givenValue)) {
      this._internalValueInCents = givenValue
      return
    }

    this._internalValueInCents = Math.trunc(givenValue * 100)
  }

  get valueInCents() {
    return this._internalValueInCents
  }

  formattedAsFullPrice() {
    return (this._internalValueInCents / 100).toFixed(2)
  }
}
