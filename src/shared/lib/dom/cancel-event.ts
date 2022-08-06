/**
 * Останавливает событие, если это возможно.
 * @returns Возвращает `true`, если событие было остановлено.
 */
export const cancelEvent = (event: Event): boolean => {
  if (event.cancelable && !event.defaultPrevented) {
    event.preventDefault()
    event.stopPropagation()

    return true
  }

  return false
}
