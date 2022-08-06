import {delay} from '@/shared/lib/flow/delay'

/**
 * Проверяет условие указанное количество раз с интервалом времени
 */
export const retry = async (
  action: () => Promise<boolean> | boolean,
  attempt: number,
  timeout: number,
): Promise<void> => {
  const success = await action()

  if (success) {
    return undefined
  }

  if (attempt <= 1) {
    throw new Error('retry: Attempts ended')
  }

  await delay(timeout)

  return retry(action, attempt - 1, timeout)
}

/**
 * Пытается получить успешный результат количество раз с интервалом времени
 * @returns Возвращает результат функции `action`
 * @throws Возвращает ошибку функции `action`
 */
export const retryPromise = async <T>(
  action: () => Promise<T>,
  attempt: number,
  timeout: number,
): Promise<T> => action()
  .catch(async (error) => (attempt <= 1 ? Promise.reject(error) : Promise.resolve()))
  .then(async () => delay(timeout))
  .then(async () => retryPromise(action, attempt - 1, timeout))
