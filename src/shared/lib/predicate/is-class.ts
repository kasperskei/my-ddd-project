// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
export const isClass = <T, C extends new (...arguments_: unknown[]) => unknown>(target: C | T): target is C => typeof target === 'function' && target.prototype?.constructor
