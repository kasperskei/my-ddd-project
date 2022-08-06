// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
export const isFunction = <T, F extends (...arguments_: unknown[]) => unknown>(target: F | T): target is F => typeof target === 'function' && target.prototype?.constructor
