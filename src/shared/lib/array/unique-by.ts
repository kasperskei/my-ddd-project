type Resolver<T> = (item: T) => unknown

type Indexer<T> = keyof T
// type Indexer<T> = number | keyof T | symbol;

type ValueResolver<T> = Indexer<T> | Resolver<T>

/**
 * @see https://github.com/tc39/proposal-array-unique
 * @see https://github.com/zloirock/core-js#array-deduplication
 */
export const uniqueBy = <T>(array: readonly T[], valueResolver?: ValueResolver<T>): T[] => {
  if (valueResolver === undefined) {
    return [...new Set(array)]
  }

  if (typeof valueResolver !== 'function') {
    const key = valueResolver

    // eslint-disable-next-line no-param-reassign
    valueResolver = (item: T): unknown => item[key]!
  }

  const map = array.reduce((acc, item) => {
    const key = (valueResolver as Resolver<T>)(item)

    if (!acc.has(key)) {
      acc.set(key, item)
    }

    return acc
  }, new Map<unknown, T>())

  return [...map.values()]
}
