import {noop} from '@/shared/lib/other/noop'

const trailingDebounce = <T extends (...args: unknown[]) => void>(function_: T, delay: number): T => {
  let timerId: ReturnType<typeof setTimeout> | undefined

  return ((...args) => {
    clearTimeout(timerId)

    timerId = setTimeout(() => function_(...args), delay)
  }) as T
}

const leadingDebounce = <T extends (...args: unknown[]) => void>(function_: T, delay: number): T => {
  let timerId: ReturnType<typeof setTimeout> | undefined

  return ((...args) => {
    if (timerId === undefined) {
      function_(...args)
    }

    clearTimeout(timerId)
    timerId = setTimeout(() => {
      timerId = undefined
    }, delay)
  }) as T
}

const trailingAndLeadingDebounce = <T extends (...args: unknown[]) => void>(function_: T, delay: number): T => {
  let timerId: ReturnType<typeof setTimeout> | undefined

  let isCalled = false

  return ((...args) => {
    if (timerId === undefined) {
      function_(...args)
      isCalled = true
    } else {
      isCalled = false
    }

    clearTimeout(timerId)
    timerId = setTimeout(() => {
      timerId = undefined
      if (!isCalled) {
        function_(...args)
      }
    }, delay)
  }) as T
}

/**
 * @see https://ellenaua.medium.com/throttle-debounce-behavior-lodash-6bcae1494e03
 */
export const debounce = <T extends (...args: unknown[]) => void>(
  function_: T,
  delay: number,
  {
    leading = false,
    trailing = true,
  }: {
    leading?: boolean
    trailing?: boolean
  } = {},
): T => {
  if (leading && trailing) {
    return trailingAndLeadingDebounce(function_, delay)
  } if (leading) {
    return leadingDebounce(function_, delay)
  } if (trailing) {
    return trailingDebounce(function_, delay)
  }

  return noop as T
}
