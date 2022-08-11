import type {Wretch} from 'wretch'
import wretch from 'wretch'
import {inject} from 'vue'
import type {InjectionKey, Plugin} from 'vue'

type HttpClient = Wretch

const HTTP_PROVIDE_KEY: InjectionKey<Readonly<HttpClient>> = Symbol.for('http')

/**
 * @see https://github.com/elbywan/wretch
 */
export const createHttp = (): Plugin => ({
  install: (app) => {
    const http = wretch('/')
      // .options({credentials: 'include', mode: 'cors'})
      .headers({'X-Requested-With': 'XMLHttpRequest'})
      // .errorType('json')
      // .resolve(async (response) => response.json())

    // app.config.globalProperties['http'] = http

    app.provide(HTTP_PROVIDE_KEY, http)
  },
})

export const useHttp = (): Readonly<HttpClient> => inject(HTTP_PROVIDE_KEY)!
