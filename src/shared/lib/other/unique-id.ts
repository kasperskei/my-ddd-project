/**
 * Создает уникальный идентификатор.
 * Если указан префикс, к нему добавляется идентификатор.
 */
// eslint-disable-next-line no-plusplus, no-param-reassign
export const uniqueId = ((counter: number) => <P extends string = ''>(prefix: P = '' as P): `${P}${number}` => `${prefix}${++counter}`)(0)
