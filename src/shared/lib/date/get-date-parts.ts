import {Milliseconds} from '@/shared/consts/time'

interface DateParts {
  totalDays: number
  totalHours: number
  totalMinutes: number
  totalSeconds: number
  totalMilliseconds: number
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

/**
 * Описание функции
 * @param milliseconds - колличество милисекунд
 * @param options - дополнительные опции
 * @param options.roundingUp - если данная опция true, округляем возвращаемые данные до наибольшего целого, если false до наименьшего целого
 */
export const getDateParts = (date: Date | Timestamp): DateParts => {
  const totalMilliseconds = date instanceof Date ? date.getTime() : date

  const totalDays = totalMilliseconds / Milliseconds.IN_DAY
  const totalHours = totalMilliseconds / Milliseconds.IN_HOUR
  const totalMinutes = totalMilliseconds / Milliseconds.IN_MINUTE
  const totalSeconds = totalMilliseconds / Milliseconds.IN_SECOND

  return {
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    totalMilliseconds,

    days: totalDays,
    hours: totalHours % 24,
    minutes: totalMinutes % 60,
    seconds: totalSeconds % 60,
    milliseconds: totalMilliseconds % 1000,
  }
}
