import type {Pinia} from 'pinia'
import {createPinia} from 'pinia'

export const withStore = (): Pinia => {
  const store = createPinia()

  return store
}
