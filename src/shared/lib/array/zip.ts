type Zip<T extends unknown[][]> = {[K in keyof T]: T[K] extends (infer V)[] ? V : undefined}[]

/**
 * Создает массив сгруппированных элементов, первый из которых содержит первые элементы заданных массивов, второй из которых содержит вторые элементы заданных массивов и так далее.
 * @example zip(['a', 'b'], [1, 2], [true, false]) // [['a', 1, true], ['b', 2, false]]
 */
export const zip = <T extends unknown[][]>(...arrays: T): Zip<T> => Array.from(
  {length: Math.max(...arrays.map((array) => array.length))},
  (_, index) => arrays.map((array) => array[index]),
) as Zip<T>
