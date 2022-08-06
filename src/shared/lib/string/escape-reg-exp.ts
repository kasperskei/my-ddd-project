const SEARCH_REGEXP = /[$()*+./?[\\\]^{|}-]/g

/**
 * Экранирование символов регулярного выражения для использования в качестве паттерна в регулярном выражении.
 * @see https://www.30secondsofcode.org/js/s/escape-reg-exp
 */
export const escapeRegExp = (string_: string): string => string_.replace(SEARCH_REGEXP, '\\$&')
