const SEARCH_REGEX = /([\da-z]|(?=[A-Z]))([A-Z])/g

export const camelToKebab = (string: string): string => string.replace(SEARCH_REGEX, '$1-$2').toLowerCase()
