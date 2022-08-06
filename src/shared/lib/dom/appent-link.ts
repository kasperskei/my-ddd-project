/**
 * Добавляет <link> в тело документа
 */
export const appendLink = async (href: string, {
  rel = 'stylesheet',
  type = 'text/css',
} = {}): Promise<HTMLLinkElement> => {
  const link = document.createElement('link')

  link.rel = rel
  link.type = type
  link.href = href

  document.head.append(link)

  return new Promise((resolve, reject) => {
    link.addEventListener('load', (): void => resolve(link))
    link.addEventListener('error', (error): void => reject(error))
  })
}
