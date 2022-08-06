/**
 * Добавляет скрипт в тело документа
 * @todo Перенести в jsUtils/dom/appendScript
 * @param src
 * @param async Allows to load script file asynchronously by adding attribute `async` to the script element. It takes precedence if both `async` and `defer` are defined
 * @param defer Allows to load script file deferred
 * @param attributes
 */
export const appendScript = async (source: string, {
  async = false,
  defer = false,
  attributes = {},
} = {}): Promise<HTMLScriptElement> => {
  const scriptExist = document.querySelector<HTMLScriptElement>(`script[src="${source}"]`)

  if (scriptExist) {
    return scriptExist
  }

  const script = document.createElement('script')

  Object.entries<string>(attributes).forEach(([key, value]) => script.setAttribute(key, value))

  script.async = async
  script.defer = defer
  script.src = source

  document.head.append(script)

  return new Promise((resolve, reject) => {
    script.addEventListener('load', (): void => resolve(script))
    script.addEventListener('error', (error): void => reject(error))
  })
}
