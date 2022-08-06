/**
 * Находится ли документ в Iframe.
 */
export const inIframe = (): boolean => {
  try {
    return globalThis.self !== globalThis.top
  } catch {
    return true
  }
}
