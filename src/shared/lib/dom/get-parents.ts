import {isDefine} from '@/shared/lib/predicate/is-define'

/**
 * @returns Возвращает список всех родительских нод в порядке удаления от целевого элемента.
 */
export const getParents = (target: Node): Node[] => {
  const parents: Node[] = []

  let parent = target.parentNode

  while (isDefine(parent) && parent instanceof Node) {
    parents.push(parent)
    parent = parent.parentNode
  }

  return parents
}
