/**
 * Извлекает изображение и возвращает полученное изображение.
 */
export const fetchImage = async ({
  width = 0,
  height = 0,
  src: source = '',
  srcset = '',
}: {
  width?: number
  height?: number
  src?: string
  srcset?: string
}): Promise<HTMLImageElement> => {
  const image = new Image(width, height)
  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', () => reject(image))
  })

  image.src = source
  image.srcset = srcset
  image.loading = 'eager'

  return promise
}
