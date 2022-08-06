import {isDefine} from '@/shared/lib/predicate/is-define'

/**
 * Является ли значение объектом, массивом, функцией или другим объектно подобным.
 */
export const isObject = <T extends object>(value: unknown): value is T => isDefine(value) && (typeof value === 'object' || typeof value === 'function')
