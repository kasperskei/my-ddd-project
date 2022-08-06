export const windowOnLoad = async (): Promise<void> => {
  if (document.readyState === 'complete') {
    return
  }

  await new Promise<void>((resolve) => {
    const onLoad = (): void => {
      window.removeEventListener('load', onLoad)
      resolve()
    }

    window.addEventListener('load', onLoad)
  })
}
