const cache = new Map<UInt, UInt>([[0, 1], [1, 1]])

const find = (n: UInt): UInt => {
  if (cache.has(n)) {
    return cache.get(n)!
  }

  const value = find(n - 1) * n

  cache.set(n, value)

  return value
}

/**
 * Вычисляет факториал числа.
 * Поддерживает только целые без знаковые числа.
 */
export const factorial = (n: UInt = 0): UInt => {
  if (n < 0) {
    return 0
  }

  return find(n)
}
