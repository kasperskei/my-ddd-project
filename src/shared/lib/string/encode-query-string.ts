import {isDefine} from '@/shared/lib/predicate/is-define'
import {isObject} from '@/shared/lib/predicate/is-object'

const doNotWrap = (key: string): string => key
const wrapInBrackets = (key: string): string => `[${key}]`

interface Parameters {
  [keyof: string]: Parameters | boolean | number | string
}

/**
 * @example encodeQueryString({a: {b: {c: [1, 2, 3]}}, d: 4: e: undefined}) // a[b][c][0]=1&a[b][c][1]=2&a[b][c][2]=3&d=4
 */
export const encodeQueryString = (object: Parameters, prefix = ''): string => {
  const wrapKey = prefix === '' ? doNotWrap : wrapInBrackets

  return Object.entries(object)
    .filter(([, value]) => isDefine(value))
    .map(([key, value]) => {
      const keyWithPrefix = `${prefix}${wrapKey(encodeURIComponent(key))}`

      return isObject(value)
        ? encodeQueryString(value, keyWithPrefix)
        : `${keyWithPrefix}=${encodeURIComponent(value)}`
    })
    .join('&')
}
