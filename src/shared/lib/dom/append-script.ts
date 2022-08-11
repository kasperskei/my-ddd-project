/**
 * Добавляет скрипт в тело документа.
 */
export const appendScript = async (attrs: {
  [k: string]: string | true | undefined
  src: string
  async?: true
  defer?: true
}): Promise<HTMLScriptElement> => {
  const scriptExist = document.querySelector<HTMLScriptElement>(`script[src="${attrs.src}"]`)

  if (scriptExist) {
    return scriptExist
  }

  const script = document.createElement('script')

  Object.entries(attrs)
    .filter(([key, value]) => value !== undefined)
    .forEach(([key, value]) => script.setAttribute(key, value === true ? '' : value!))

  document.head.append(script)

  return new Promise((resolve, reject) => {
    script.addEventListener('load', (): void => resolve(script))
    script.addEventListener('error', (error): void => reject(error))
  })
}
