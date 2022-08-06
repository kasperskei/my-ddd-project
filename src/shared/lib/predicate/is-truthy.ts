// eslint-disable-next-line unicorn/prefer-native-coercion-functions
export const isTruthy = <T>(value: T): value is Exclude<T, Falsy> => Boolean(value)
