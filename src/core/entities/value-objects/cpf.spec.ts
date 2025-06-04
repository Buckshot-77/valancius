import { CPF } from './cpf'

describe('CPF Value Object unit tests', () => {
  it('should create a CPF with valid input (formatted)', () => {
    const cpf = new CPF('529.982.247-25')
    expect(cpf.getValue()).toBe('52998224725')
    expect(cpf.toString()).toBe('529.982.247-25')
  })

  it('should create a CPF with valid input (unformatted)', () => {
    const cpf = new CPF('52998224725')
    expect(cpf.getValue()).toBe('52998224725')
    expect(cpf.toString()).toBe('529.982.247-25')
  })

  it('should throw error for invalid CPF format (too short)', () => {
    expect(() => new CPF('123456789')).toThrowError('Invalid CPF format')
  })

  it('should throw error for invalid CPF format (non-digit characters)', () => {
    expect(() => new CPF('abc.def.ghi-jk')).toThrowError('Invalid CPF format')
  })

  it('should throw error for CPF with invalid check digits', () => {
    expect(() => new CPF('123.456.789-00')).toThrowError('Invalid CPF number')
  })

  it('should throw error for CPF with all repeated digits', () => {
    expect(() => new CPF('111.111.111-11')).toThrowError('Invalid CPF number')
    expect(() => new CPF('00000000000')).toThrowError('Invalid CPF number')
    expect(() => new CPF('999.999.999-99')).toThrowError('Invalid CPF number')
  })
})
