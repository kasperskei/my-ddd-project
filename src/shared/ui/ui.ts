import type {InjectionKey, Plugin} from 'vue'
import {inject} from 'vue'

export interface UiConfig {
  dir: 'ltr' | 'rtl'
}

const UI_CONFIG_PROVIDE_KEY: InjectionKey<Readonly<UiConfig>> = Symbol.for('ui-config')

export const createUi = (config: UiConfig): Plugin => ({
  install: (app) => {
    app.provide(UI_CONFIG_PROVIDE_KEY, config)
  },
})

export const useConfig = (): Readonly<UiConfig> => inject(UI_CONFIG_PROVIDE_KEY)!
