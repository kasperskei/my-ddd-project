export const isPromise = <T>(value: Promise<T> | T): value is Promise<T> => value instanceof Promise
