import {isObject} from '@/shared/lib/predicate/is-object'

/**
 * Делает объект полностью неизменяемым.
 */
export const deepFreeze = <T>(target: T): DeepReadonly<T> => {
  if (!isObject(target)) {
    return target as DeepReadonly<T>
  }

  Object.getOwnPropertyNames(target)
    .map((key) => target[key as keyof T])
    .forEach((value) => deepFreeze(value))

  /** Заморозить сам объект target (ничего не произойдёт, если он уже заморожен) */
  return Object.freeze(target) as DeepReadonly<T>
}
