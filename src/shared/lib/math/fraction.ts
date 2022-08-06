import {gcd} from '@/shared/lib/math/gcd'

/**
 * Конвертирует десятичную дробь в обычную дробь.
 */
export const fraction = (value: number): [numerator: number, denominator: number] => {
  const divisor = gcd(value, 1)

  return [Math.trunc(value / divisor), Math.trunc(1 / divisor)]
}
