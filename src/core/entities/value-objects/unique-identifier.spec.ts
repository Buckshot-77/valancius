import { UniqueIdentifier } from './unique-identifier'

describe('UniqueIdentifier value object unit tests', () => {
  it('should be able to generate a new uuid when no string is provided', () => {
    const uuid = new UniqueIdentifier()

    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/

    expect(uuidRegex.test(uuid.value)).toBeTruthy()
  })

  it('should be able to use given string to build the identifier, even if it does not match the uuid specification ', () => {
    const uuid = new UniqueIdentifier('hello')

    expect(uuid.value).toBe('hello')
  })
})
