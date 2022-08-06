import {escapeRegExp} from './escape-reg-exp'

export type TrimChar<
  T extends string,
  C extends string,
> = T extends `${C}${infer U}`
  ? TrimChar<U, C>
  : T extends `${infer U}${C}`
    ? TrimChar<U, C>
    : T

/**
 * Убирает символы в начале и конце строки
 */
export const trimChar = <T extends string, C extends string>(string_: T, char: C): TrimChar<T, C> => {
  const escapedChar = escapeRegExp(char)

  return string_.replace(
    new RegExp(`^[${escapedChar}]+|[${escapedChar}]+$`, 'g'),
    '',
  ) as TrimChar<T, C>
}
