interface Options {
  readonly accuracy?: number
  readonly max?: number
  readonly maxlength?: number
  readonly min?: number
  readonly unsigned?: boolean
}

/** Удаляет невалидные символы */
export const correctSymbols = (value: string): string => value.replace(/[^\d,.-]/g, '')

/** Удаляет лишние знаки минуса */
export const correctMinus = (value: string, unsigned = false): string => (unsigned
  ? value.replace(/-/g, '')
  : value.replace(/(^-)-*|-*/g, '$1'))

/** Заменяет запятую на точку и все символы после второго разделителя. Подставляем 0 в начало, если начинается с разделительного знака */
export const correctSeparator = (value: string, accuracy?: number): string => value.split(/[,.]/g, accuracy === 0 ? 1 : 2).join('.').replace(/^\./, '0.')

/** Удаляет незначащие нули в начале строки */
export const correctZero = (value: string): string => value.replace(/(^-?)0+(?=\d)/, '$1')

/** Возвращает минимальное значение, если исходное значение меньше минимального */
export const correctMin = (value: string, min: number): string => (Number.parseFloat(value) < min ? min.toString() : value)

/** Возвращает максимальное значение, если исходное значение больше максимального */
export const correctMax = (value: string, max: number): string => (Number.parseFloat(value) > max ? max.toString() : value)

/** Удаляет символы дробной части после заданной точности */
export const correctAccuracy = (value: string, accuracy: number): string => value.replace(/\..+/, (match) => match.slice(0, accuracy + 1))

/** Удаляет символы больше дальше максимальной длины строки */
export const correctLength = (value: string, maxlength: number): string => value.slice(0, maxlength)

/**
 * Форматирует строку к виду, понятному parseFloat и parseInt
 * @todo Оптимизировать скорость выполнения функции
 * @todo Возможно, стоит убрать unsigned м заменить его на min = 0
 */
export const correctNumber = (
  value = '',
  {
    unsigned = false,
    accuracy,
    min,
    max,
    maxlength,
  }: Options = {},
): string => {
  let result = value

  result = correctSymbols(result)
  result = correctMinus(result, unsigned)
  result = correctSeparator(result, accuracy)
  result = correctZero(result)

  if (min !== undefined) {
    result = correctMin(result, min)
  }
  if (max !== undefined) {
    result = correctMax(result, max)
  }
  if (accuracy !== undefined) {
    result = correctAccuracy(result, accuracy)
  }
  if (maxlength !== undefined) {
    result = correctLength(result, maxlength)
  }

  return result
}
