/**
 * Создает массив элементов, разделенных на группы по длине размера.
 * Если массив не может быть разделен равномерно, последним фрагментом будут оставшиеся элементы.
 * @example chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 */
export const chunk = <T>(array: T[], size: UInt = 1): T[][] => {
  const count = Math.max(Math.round(size), 1)

  return array.reduce<T[][]>((acc, curr: T) => {
    const piece = acc.at(-1)!

    if (piece.length === count) {
      acc.push([curr])
    } else {
      piece.push(curr)
    }

    return acc
  }, [[]])
}
