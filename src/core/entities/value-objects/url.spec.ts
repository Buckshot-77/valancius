import { Url } from './url'

describe('URL value object unit tests', () => {
  it('should throw an error when URL format is invalid', () => {
    expect(() => new Url('invalid-url')).toThrowError('URL format is invalid')
  })

  it('should create a URL when the format is valid', () => {
    const url = new Url('www.example.com')
    const url2 = new Url('http://www.example.com')
    const url3 = new Url('https://example.com')
    const url4 = new Url('example.com')

    expect(url).toBeInstanceOf(Url)
    expect(url2).toBeInstanceOf(Url)
    expect(url3).toBeInstanceOf(Url)
    expect(url4).toBeInstanceOf(Url)
    expect(url.value).toEqual('www.example.com')
    expect(url2.value).toEqual('http://www.example.com')
    expect(url3.value).toEqual('https://example.com')
    expect(url4.value).toEqual('example.com')
  })
})
