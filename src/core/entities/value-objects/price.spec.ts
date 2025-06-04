import { Price } from './price'

describe('Price value object unit tests', () => {
  it('should create a price', () => {
    const testPrice = 1035

    const priceInstance = new Price(testPrice)

    expect(priceInstance.valueInCents).toEqual(testPrice)
    expect(priceInstance.formattedAsFullPrice()).toEqual('10.35')
  })
})
