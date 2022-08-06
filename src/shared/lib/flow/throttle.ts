import {noop} from '@/shared/lib/other/noop'

const trailingThrottle = <T extends (...args: unknown[]) => void>(function_: T, delay: number): T => {
  let isThrottled = false
  let savedArguments: unknown[] | undefined

  const wrapper = (...args: unknown[]): void => {
    if (isThrottled) {
      savedArguments = args

      return
    }

    isThrottled = true

    setTimeout(() => {
      isThrottled = false

      if (savedArguments !== undefined) {
        function_(...savedArguments)
        savedArguments = undefined
      }
    }, delay)
  }

  return wrapper as T
}

const leadingThrottle = <T extends (...args: unknown[]) => void>(function_: T, delay: number): T => {
  let isThrottled = false

  const wrapper = (...args: unknown[]): void => {
    if (isThrottled) {
      return
    }

    function_(...args)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false
    }, delay)
  }

  return wrapper as T
}

const trailingAndLeadingThrottle = <T extends (...args: unknown[]) => void>(function_: T, delay: number): T => {
  let isThrottled = false
  let savedArguments: unknown[] | undefined

  const wrapper = (...args: unknown[]): void => {
    if (isThrottled) {
      savedArguments = args

      return
    }

    function_(...args)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false

      if (savedArguments !== undefined) {
        wrapper(...savedArguments)
        savedArguments = undefined
      }
    }, delay)
  }

  return wrapper as T
}

export const throttle = <T extends (...args: unknown[]) => void>(
  function_: T,
  delay: number,
  {
    leading = true,
    trailing = true,
  }: {
    leading?: boolean
    trailing?: boolean
  } = {},
): T => {
  if (leading && trailing) {
    return trailingAndLeadingThrottle(function_, delay)
  } if (leading) {
    return leadingThrottle(function_, delay)
  } if (trailing) {
    return trailingThrottle(function_, delay)
  }

  return noop as T
}

/**
 * Вызывает функцию в момент отрисовки кадра
 */
export const throttleAnimationFrame = <T extends (...args: unknown[]) => void>(callback: T): T => {
  let isThrottled = false

  const wrapper = (...args: unknown[]): void => {
    if (!isThrottled) {
      requestAnimationFrame(() => {
        callback(...args)
        isThrottled = false
      })

      isThrottled = true
    }
  }

  return wrapper as T
}
