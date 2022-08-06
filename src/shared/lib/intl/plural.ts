const cases = [2, 0, 1, 1, 1, 2]

/**
 * Функция для определения склонения.
 * @see https://gist.github.com/realmyst/1262561
 * @param count Число в отношении которого происходит склонение. Например, count = 1: "1 мяч"; count = 4: "4 мячА"; count = 13: "13 мячЕЙ".
 * @param titles Массив строк с вариантами склонения слова/фразы. Например, ["мяч", "мяча", "мячей"]
 */
export const plural = (count: number, titles: string[]): string => titles[(count % 100 > 4 && count % 100 < 20 ? 2 : cases[count % 10 < 5 ? count % 10 : 5])!]!
