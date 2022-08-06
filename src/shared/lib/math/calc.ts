const {round} = Math

/**
 * @function expand, accepts two parameters, coerces them to integers, and
 * returns an object containing the x & y integer pair, plus the exponent by
 * which to reduce the result of an operation on them to their original decimal
 * precision.
 *
 * Отброшен особый случай при очень малых значениях, т.к. специфика приложения не подразумевает таких чисел.
 *
 * @see https://0.30000000000000004.com
 * @see https://github.com/dfkaye/safe-math
 */
const expand = (x: number, y: number): {
  exponent: number
  left: number
  right: number
} => {
  const a = `${x}`.split('.')[1]?.length ?? 0
  const b = `${y}`.split('.')[1]?.length ?? 0
  const c = a > b ? a : b
  const d = 10 ** c

  return {
    exponent: d,
    left: round(x * d),
    right: round(y * d),
  }
}

/**
 * Более безопасные математические операции с плавающей запятой.
 * @example add(0.1, 0.2) // 0.3 вместо 0.30000000000000004
 */
export const add = (x: number, y: number): number => {
  const {left, right, exponent} = expand(x, y)

  return (left + right) / exponent
}

/**
 * Более безопасные математические операции с плавающей запятой.
 * @example minus(0.3, 0.2) // 0.1 вместо 0.09999999999999998
 */
export const minus = (x: number, y: number): number => {
  const {left, right, exponent} = expand(x, y)

  return (left - right) / exponent
}

/**
 * Более безопасные математические операции с плавающей запятой.
 * @example multiply(0.2, 0.1) // 0.02 вместо 0.020000000000000004
 */
export const multiply = (x: number, y: number): number => {
  const {left, right, exponent} = expand(x, y)

  return (left * right) / (exponent * exponent)
}

/**
 * Более безопасные математические операции с плавающей запятой.
 * @example divide(0.3, 0.2) // 1.5 вместо 1.4999999999999998
 */
export const divide = (x: number, y: number): number => {
  const {left, right} = expand(x, y)

  return left / right
}
