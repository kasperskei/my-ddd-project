/**
 * Возвращает кэшированную функцию. Вторым аргументом принимается функция hashResolver, аргументами которой являются
 * все аргументы исходной функции и возвращается hash для каждого вызова. По умолчанию эта функция возвращает строку
 * всех аргументов, перечисленных через ';'
 */
export const memoize = <T extends (...arguments_: unknown[]) => unknown>(
  function_: T,
  hashResolver: (...arguments_: Parameters<T>) => unknown = (...arguments_): string => JSON.stringify(arguments_),
): (...arguments_: Parameters<T>) => ReturnType<T> => {
  const cache = new Map()

  return (...arguments_: Parameters<T>): ReturnType<T> => {
    const hash = hashResolver(...arguments_)

    if (cache.has(hash)) {
      return cache.get(hash) as ReturnType<T>
    }

    const result = function_(...arguments_)

    cache.set(hash, result)

    return result as ReturnType<T>
  }
}
