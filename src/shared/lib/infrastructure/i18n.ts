import {inject, unref} from 'vue'
import type {
  InjectionKey,
  Plugin,
  Ref,
} from 'vue'
import {template} from '@/shared/lib/string/template'

type Locale = string
type DictionaryKey = string
type DictionaryTemplate = string
type Dictionary = Map<DictionaryKey, DictionaryTemplate>

type D = (date: Date, options: Intl.DateTimeFormatOptions) => string
type N = (number: number, options: Intl.NumberFormatOptions) => string
type T = (key: DictionaryKey, params?: Record<string, string> | undefined) => string

interface I18n {
  d: D
  dictionary: Ref<Dictionary>
  locale: Ref<Locale>
  n: N
  t: T
}

export const I18N_PROVIDE_KEY: InjectionKey<I18n> = Symbol('i18n')

export const createI18n = <
  DictionarySchema extends Record<DictionaryKey, DictionaryTemplate>,
  NumberSchema extends Record<string, Intl.DateTimeFormatOptions>,
  DateSchema extends Record<string, Intl.NumberFormatOptions>,
>({
  locale,
  dictionary,
}: {
  dictionary: Ref<Dictionary>
  locale: Ref<Locale>
}): Plugin => ({
  install: (app) => {
    const d: D = (date, options) => date.toLocaleString(unref(locale), options)
    const n: N = (number, options) => number.toLocaleString(unref(locale), options)
    const t: T = (key, params) => template(unref(dictionary).get(key) ?? '', params)

    // app.config.globalProperties['d'] = d
    // app.config.globalProperties['n'] = n
    // app.config.globalProperties['t'] = t
    // app.config.globalProperties['locale'] = locale
    // app.config.globalProperties['dictionary'] = dictionary

    app.provide(I18N_PROVIDE_KEY, {
      d,
      dictionary,
      locale,
      n,
      t,
    })
  },
})

export const useI18n = () => inject(I18N_PROVIDE_KEY)!
