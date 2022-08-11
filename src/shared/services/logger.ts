import {inject} from 'vue'
import type {InjectionKey, Plugin} from 'vue'

interface Logger {
  error: (...data: unknown[]) => void
  info: (...data: unknown[]) => void
  warn: (...data: unknown[]) => void
}

const LOGGER_PROVIDE_KEY: InjectionKey<Readonly<Logger>> = Symbol.for('logger')

export const createLogger = (): Plugin => ({
  install: (app) => {
    const logger = console

    // app.config.globalProperties['logger'] = logger

    app.provide(LOGGER_PROVIDE_KEY, logger)
  },
})

export const useLogger = (): Readonly<Logger> => inject(LOGGER_PROVIDE_KEY)!
