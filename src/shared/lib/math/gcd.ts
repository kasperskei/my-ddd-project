const find = (a: number, b: number): number => (a > 0 ? find(b % a, a) : b)

/**
 * Вычисляет Greatest common divisor (Наибольший общий делитель).
 */
export const gcd = (a: number, b: number): number => find(Math.abs(a), Math.abs(b))
