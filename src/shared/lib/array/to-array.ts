import {isArray} from '@/shared/lib/predicate/is-array'

export const toArray = <T>(value: T | T[]): T[] => (isArray(value) ? value : [value])
