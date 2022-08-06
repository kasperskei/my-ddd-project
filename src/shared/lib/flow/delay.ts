/**
 * Резолвит промис спустя указанное время
 * @param ms время ожидания в миллисекундах
 */
export const delay = async (ms: UInt, signal?: AbortSignal): Promise<void> => new Promise((resolve, reject) => {
  const timeoutId = setTimeout(resolve, ms)

  signal?.addEventListener('abort', () => {
    clearTimeout(timeoutId)
    reject(new Error('Aborted'))
  })
})

/**
 * Резолвит промис перед отрисовкой кадра
 */
export const delayAnimationFrame = async (signal?: AbortSignal): Promise<void> => new Promise((resolve, reject) => {
  const requestId = requestAnimationFrame(() => resolve())

  signal?.addEventListener('abort', () => {
    cancelAnimationFrame(requestId)
    reject(new Error('Aborted'))
  })
})
