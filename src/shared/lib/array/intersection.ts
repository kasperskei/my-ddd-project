type ExtractArrayType<T extends unknown[]> = T extends (infer V)[] ? V : unknown

/**
 * Массив пересекающихся значений.
 */
export const intersection = <
  A1 extends unknown[],
  A2 extends unknown[],
>(
  arrayA: A1,
  arrayB: A2,
): (ExtractArrayType<A1> & ExtractArrayType<A2>)[] => arrayA.filter((it) => arrayB.includes(it)) as (ExtractArrayType<A1> & ExtractArrayType<A2>)[]
