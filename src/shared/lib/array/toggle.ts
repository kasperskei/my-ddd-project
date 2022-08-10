const toggleByIndex = <T>(
  array: T[],
  item: T,
  index: number,
): boolean => {
  if (index === -1) {
    array.push(item)
  } else {
    array.splice(index, 1)
  }

  return index === -1
}

const toggleByItem = <T>(
  array: T[],
  item: T,
): boolean => toggleByIndex(array, item, array.indexOf(item))

const toggleByPredicate = <T>(
  array: T[],
  item: T,
  predicate: (value: T, index: number, array: T[]) => boolean,
): boolean => toggleByIndex(array, item, array.findIndex((value, index, arr) => predicate(value, index, arr)))

export const toggleArrayItem = <T>(
  array: T[],
  item: T,
  predicate?: (value: T, index: number, array: T[]) => boolean,
): boolean => (predicate === undefined
  ? toggleByItem(array, item)
  : toggleByPredicate(array, item, predicate))
