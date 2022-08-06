const SEARCH_REGEXP = /["&'<>]/g

/**
 * Экранируем строку для использования в HTML.
 * @see https://www.30secondsofcode.org/js/s/escape-html
 */
export const escapeHtml = (string_: string): string => string_.replace(SEARCH_REGEXP, '\\$&')
