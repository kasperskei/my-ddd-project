/**
 * Универсализирует событие курсора и тача в одно и то же событие.
 */
export const unifyEvent = (
  event: MouseEvent | TouchEvent,
): MouseEvent | Touch => (event instanceof MouseEvent ? event : event.changedTouches[0]!)
