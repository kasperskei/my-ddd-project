import type {InjectionKey, Plugin} from 'vue'
import {inject, reactive} from 'vue'
import {CartType} from '@/modules/cart/domain'

export interface AppConfig {
  api: {
    basePath: string
  }
  brand: {
    email: Email
    logoSrc: string
    name: string
    partnerId: UInt
  }
  captcha: {
    publicKey: string
    type: 'google' | 'none'
  }
  coupon: {
    types: CouponType[]
  }
  geo: {
    countryId: UInt
    currencyId: UInt
  }
  license: {
    minAge: UInt
  }
  // ui: {

  // }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    config: AppConfig
  }
}

const APP_CONFIG_PROVIDE_KEY: InjectionKey<Readonly<AppConfig>> = Symbol.for('app-config')

export const createConfig = (): Plugin => ({
  install: (app) => {
    const config = reactive<AppConfig>({
      api: {
        basePath: '/api',
      },
      brand: {
        email: 'partner@gmail.com',
        logoSrc: '/',
        name: 'Partner',
        partnerId: 201,
      },
      captcha: {
        publicKey: 'abcdefghijklmnopqrstuvwxyz',
        type: 'google',
      },
      coupon: {
        types: [
          CartType.SINGLE,
          CartType.EXPRESS,
          CartType.SYSTEM,
          // CartType.CHAIN,
          // CartType.MULTI_BET,
          // CartType.CONDITIONAL,
          // CartType.ANTI_EXPRESS,
          // CartType.LUCKY,
          // CartType.PATENT,
        ],
      },
      geo: {
        countryId: 1,
        currencyId: 1,
      },
      license: {
        minAge: 18,
      },
    })

    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties['config'] = config

    app.provide(APP_CONFIG_PROVIDE_KEY, config)
  },
})

export const useConfig = (): Readonly<AppConfig> => inject(APP_CONFIG_PROVIDE_KEY)!

export const withConfig = (): Plugin => createConfig()
