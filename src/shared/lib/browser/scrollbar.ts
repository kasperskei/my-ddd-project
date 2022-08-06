/**
 * Получает ширину скролбара окна в пикселях, если есть.
 */
export const getWindowScrollbarWidth = (): number => window.innerWidth - window.document.documentElement.clientWidth

/**
 * Получает ширину браузерного скролбара в пикселях.
 */
export const getScrollbarWidth = (): number => {
  const element = document.createElement('div')

  element.style.width = '100px'
  element.style.height = '100px'
  element.style.overflow = 'scroll'
  element.style.position = 'absolute'
  element.style.top = '-100px'
  element.style.left = '-100px'
  element.style.padding = '0'
  element.style.border = 'none'
  document.body.append(element)

  const scrollbarWidth = element.offsetWidth - element.clientWidth

  element.remove()

  return scrollbarWidth
}

/**
 * Учитывает ли браузер ширину скроллбара при срабатывании медиавыражений или нет.
 * Если да, то возвращает эту ширину.
 * В браузерах Safari медиавыражение не учитывает в ширине окна размеры полосы прокрутки.
 */
export const getMediaScrollbarWidthDifference = (): number => {
  const windowWidth = window.innerWidth
  const scrollbarWidth = getWindowScrollbarWidth()
  const mediaQuery = `(width:${windowWidth - scrollbarWidth}px)`

  return window.matchMedia(mediaQuery).matches
    ? scrollbarWidth
    : 0
}
