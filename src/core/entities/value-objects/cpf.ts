import { EntityValidationError } from '../errors/entity-validation-internal-error'

export class CPF {
  private readonly value: string

  constructor(cpf: string) {
    const cleaned = CPF.clean(cpf)

    if (!CPF.isValidFormat(cleaned)) {
      throw new EntityValidationError('Invalid CPF format')
    }

    if (!CPF.isValidCPF(cleaned)) {
      throw new EntityValidationError('Invalid CPF number')
    }

    this.value = cleaned
  }

  public toString(): string {
    return this.format()
  }

  public getValue(): string {
    return this.value
  }

  private format(): string {
    return this.value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
  }

  // Static utility methods

  private static clean(cpf: string): string {
    return cpf.replace(/\D/g, '')
  }

  private static isValidFormat(cpf: string): boolean {
    return /^\d{11}$/.test(cpf)
  }

  private static isValidCPF(cpf: string): boolean {
    // Reject known invalid CPFs
    if (/^(\d)\1+$/.test(cpf)) return false

    const calcCheckDigit = (cpf: string, factor: number): number => {
      let total = 0
      for (let i = 0; i < factor - 1; i++) {
        total += parseInt(cpf[i]) * (factor - i)
      }
      const remainder = (total * 10) % 11
      return remainder === 10 ? 0 : remainder
    }

    const digit1 = calcCheckDigit(cpf, 10)
    const digit2 = calcCheckDigit(cpf, 11)

    return digit1 === parseInt(cpf[9]) && digit2 === parseInt(cpf[10])
  }
}
