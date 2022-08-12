import type {Plugin} from 'vue'

/** @see https://github.com/Faisal-Manzer/postcss-viewport-height-correction */
const setViewportProperty = (doc: HTMLElement): () => void => {
  let prevClientHeight = doc.clientHeight

  const handleResize = (): void => {
    const {clientHeight} = doc

    if (clientHeight === prevClientHeight) {
      return
    }

    requestAnimationFrame(() => {
      // eslint-disable-next-line unicorn/consistent-destructuring
      doc.style.setProperty('--vh', `${clientHeight * 0.01}px`)
      prevClientHeight = clientHeight
    })
  }

  return handleResize
}

const createViewport = (): void => window.addEventListener('resize', setViewportProperty(document.documentElement))

export const withViewport = (): Plugin => createViewport
