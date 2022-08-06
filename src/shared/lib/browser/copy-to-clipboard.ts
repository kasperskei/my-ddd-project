/**
 * Копирование строки в буфер обмена.
 * @see https://htmldom.dev/copy-text-to-the-clipboard
 * @returns Возвращает `true`, если строка успешно скопирована в буфер обмена.
 */
export const copyToClipboard = (text: string): boolean => {
  const element = document.createElement('textarea')

  /** Выносим элемент на отдельный слой, чтобы не пересчитывался layout */
  element.style.position = 'absolute'
  element.value = text

  document.body.append(element)
  element.select()

  try {
    document.execCommand('copy')
  } catch {
    return false
  }

  element.remove()

  return true
}
