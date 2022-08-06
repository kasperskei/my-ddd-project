const RGX = /{{(.*?)}}/g

/**
 * Очень быстрый рендер шаблонных строк в синтаксисе Mustache.
 *
 * @see https://github.com/janl/mustache.js
 * @see https://github.com/twitter/hogan.js
 * @see https://github.com/archan937/templayed.js
 * @see https://github.com/lukeed/templite
 */
export const template = (sample: string, params: Record<string, string> | undefined = {}): string => sample.replace(RGX, (literal, key: string) => params[key] ?? '')
