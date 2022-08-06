export interface WindowFeatures {
  readonly width?: number
  readonly height?: number
  readonly left?: number
  readonly top?: number
  readonly location?: boolean
  readonly scrollbars?: boolean
  readonly resizable?: boolean
  readonly toolbar?: boolean
  readonly menubar?: boolean
  readonly status?: boolean
}

const transformValue = <T = boolean | number | string>(value: T): string => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no'
  }

  return String(value)
}

/**
 * Открывает страницу в новой вкладке
 * Удаляет в новом окне ссылку на исходное окно
 * Не использовать хелпер в регистрации и авторизации через соц сети, т.к. появляется проблема с редиректом после завершения регистрации и авторизации
 * @param url - ссылка новой вкладки
 * @param windowFeatures - список функций окна https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features
 */
export const openInNewTab = (url: string, windowFeatures?: WindowFeatures): Window | undefined => {
  const features = windowFeatures
    ? Object.entries(windowFeatures)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]: [string, boolean | number]) => `${key}=${transformValue(value)}`)
      .join(',')
    : ''
  const newWindow = window.open(url, '_blank', `noopener,noreferrer${features}`)

  /** Удаляем источник, с которого открыта новая вкладка */
  if (newWindow) {
    newWindow.opener = undefined
  }

  return newWindow ?? undefined
}
