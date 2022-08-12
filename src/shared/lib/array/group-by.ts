type CriteriaFunc<K, V> = (item: V, index: number, array: V[]) => K

/**
 * Создает объект, состоящий из ключей, сгенерированных из результатов выполнения каждого элемента коллекции через итерацию.
 * Порядок сгруппированных значений определяется порядком их появления в коллекции.
 * Соответствующее значение каждого ключа представляет собой массив элементов, ответственных за создание ключа.
 * @see https://github.com/zloirock/core-js#array-grouping
 */
 export const groupBy = <K, V>(
  collection: Map<unknown, V> | ReadonlyMap<unknown, V> | ReadonlySet<V> | Set<V> | V[] | readonly V[],
  criteria: CriteriaFunc<K, V> | string,
): Map<K, V[]> => {
  const array = [...collection.values()]
  const getKey = typeof criteria === 'string'
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    ? (item: V): K => item[criteria]
    : criteria

  return array.reduce((acc, item, index) => {
    const key = getKey(item, index, array)

    if (acc.has(key)) {
      acc.get(key)!.push(item)
    } else {
      acc.set(key, [item])
    }

    return acc
  }, new Map<K, V[]>())
}
