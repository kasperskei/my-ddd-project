/**
 * Получить братьев и сестер элемента
 * @param target - элемент, чьих братьев и сестер будем искать
 * @param selector - селектор, по которому находятся братские элементы
 */
export const getSiblings = (target: Node, selector = '*'): Node[] => [...(target.parentNode?.querySelectorAll(selector) ?? []) as Node[]]
  .filter((child) => child !== target)
