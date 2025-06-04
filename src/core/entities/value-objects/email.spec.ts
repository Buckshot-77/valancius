import { EntityValidationError } from '../errors/entity-validation-internal-error'
import { Email } from './email'

describe('Email value object unit tests', () => {
  it("should not create an email value object if the format does'nt match the specs for a valid email address", () => {
    const testEmail = 'fdsiopfjosdoi'

    expect(() => {
      new Email(testEmail)
    }).toThrowError(new EntityValidationError('Email format is invalid'))
  })

  it('should create an email when the format is valid', () => {
    const testEmail = 'mail@default.com'

    const emailInstance = new Email(testEmail)

    expect(emailInstance.toString()).toEqual(testEmail)
  })
})
