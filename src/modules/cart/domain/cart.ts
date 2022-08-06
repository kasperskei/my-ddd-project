/* eslint-disable no-param-reassign */
import {CartType} from '@/modules/cart/domain/types'
import type {
  CartMarket,
  ComposeCart,
  EmptyCart,
  ExpressCart,
  SingleCart,
  SystemCart,
} from '@/modules/cart/domain/types'

/**
 * Конфигурация корзины маркетов.
 * @todo Заменить на конфигурацию приложения.
 * @todo Прокидывать конфигурацию в качестве аргумента в методы корзины.
 */
const config = {
  account: {
    currencyIso: 'RUB' as const,
  },
  cart: {
    max: 50,
    types: [
      {
        id: CartType.SINGLE,
        min: 1,
        max: 1,
      },
      {
        id: CartType.EXPRESS,
        min: 2,
        max: 50,
      },
      {
        id: CartType.SYSTEM,
        min: 3,
        max: 20,
      },
    ],
  },
}

export const isEmptyCart = (cart: ComposeCart): cart is EmptyCart => cart.typeId === CartType.SINGLE && cart.markets.length === 0

export const isSingleCart = (cart: ComposeCart): cart is SingleCart => cart.typeId === CartType.SINGLE && cart.markets.length === 1

export const isExpressCart = (cart: ComposeCart): cart is ExpressCart => cart.typeId === CartType.EXPRESS

export const isSystemCart = (cart: ComposeCart): cart is SystemCart => cart.typeId === CartType.SYSTEM

export const createEmptyCart = (): EmptyCart => ({
  amount: 0,
  coef: 0,
  markets: [] as [],
  systemValue: undefined,
  typeId: CartType.SINGLE,
})

/** Доступные типы корзины, которые может выставить пользователь. */
export const getAvailableTypes = (cart: ComposeCart): CartType[] => {
  const count = cart.markets.length
  const types = config.cart.types
    .filter((type) => count >= type.min && count <= type.max)
    .map((type) => type.id)

  return types
}

/** Получает максимальное доступное значение системы для корзины. */
const getMaxSystemValue = <T extends ComposeCart>(
  cart: T,
): T extends SystemCart ? UInt : undefined => (isSystemCart(cart)
  ? cart.markets.length - 1
  : undefined) as T extends SystemCart ? UInt : undefined

/** Получает минимальное доступное значение системы для корзины. */
const getMinSystemValue = <T extends ComposeCart>(
  cart: T,
): T extends SystemCart ? 2 : undefined => (isSystemCart(cart)
  ? 2
  : undefined) as T extends SystemCart ? 2 : undefined

/** Доступные значения системы для корзины. */
export const getAvailableSystemValues = (cart: ComposeCart): CartType[] => {
  if (!isSystemCart(cart)) {
    return []
  }

  const min = getMinSystemValue(cart)
  const max = getMaxSystemValue(cart)

  return Array.from({length: max - min + 1}, (_, i) => i + min)
}

/** Устанавливаем один из доступных типов корзины, если текущий тип корзины не доступен. */
const fixTypeIfNeed = (cart: ComposeCart): ComposeCart => {
  const availableTypes = getAvailableTypes(cart)

  if (!availableTypes.includes(cart.typeId)) {
    cart.typeId = availableTypes[0] ?? CartType.SINGLE
  }

  return cart
}

/**
 * Установка суммы ставки по умолчанию.
 * При добавлении ставок в пустой купон устанавливаем сумму ставки в значение шага ставки.
 * При удалении ставок из купона устанавливаем сумму ставки в undefined.
 * При изменении суммы купона устанавливаем сумму каждой ставки равной сумме купона.
 */
export const installAmount = (cart: ComposeCart, amount: UInt): ComposeCart => {
  cart.amount = amount

  return cart
}

/**
 * Устанавливаем тип корзины.
 * Устанавливаем один из доступных типов корзины, если текущий тип корзины не доступен.
 * Если корзина должна содержать значение системы, то устанавливаем минимально возможное значение, иначе устанавливаем undefined.
 */
export const installType = (cart: ComposeCart, typeId: CartType): ComposeCart => {
  cart.typeId = typeId

  fixTypeIfNeed(cart)

  cart.systemValue ??= getMinSystemValue(cart)

  return cart
}

/**
 * Добавляем маркет в корзину.
 * Если козина заполнена, то не добавляем маркет.
 * Если в корзине есть маркет с такой же игрой, то заменяем его.
 * Если результирующий тип корзины не подходит, то устанавливаем доступный тип.
 */
export const insertOrReplaceMarket = (cart: ComposeCart, market: CartMarket): ComposeCart => {
  if (cart.markets.length > config.cart.max) {
    return cart
  }

  const {gameId} = market
  const sameGameIndex = cart.markets.findIndex((it) => it.gameId === gameId)
  const replaceIndex = sameGameIndex !== -1 ? sameGameIndex : cart.markets.length

  cart.markets.splice(replaceIndex, 1, market)

  fixTypeIfNeed(cart)

  return cart
}

/**
 * Убираем маркет из корзины.
 * Если результирующий тип корзины не подходит, то устанавливаем доступный тип.
 * Если корзина становится пуста, то устанавливаем сумму ставки в 0.
 */
export const removeMarket = (cart: ComposeCart, marketId: CartMarket['id']): ComposeCart => {
  const index = cart.markets.findIndex((it) => it.id === marketId)

  if (index !== -1) {
    cart.markets.splice(index, 1)
  }

  cart = fixTypeIfNeed(cart)

  if (cart.markets.length === 0) {
    installAmount(cart, 0)
  }

  if (cart.typeId === CartType.SYSTEM) {
    const maxSystemValue = getMaxSystemValue(cart)

    cart.systemValue = Math.min(cart.systemValue, maxSystemValue)
  }

  return cart
}

/** Отчищаем корзину. */
export const emptyCart = (cart: ComposeCart): EmptyCart => {
  cart.markets.splice(0, cart.markets.length)
  cart.amount = 0
  cart.systemValue = undefined
  cart.typeId = CartType.SINGLE

  return cart as EmptyCart
}

/** Содержит ли корзина маркет. */
export const containsMarket = (cart: ComposeCart, marketId: CartMarket['id']): boolean => cart.markets.some((item) => item.id === marketId)

/** Содержит ли корзина маркет из игры. */
export const containsGame = (cart: ComposeCart, gameId: CartMarket['gameId']): boolean => cart.markets.some((item) => item.gameId === gameId)

/** Количество маркетов в корзине. */
export const getMarketsCount = (cart: ComposeCart): number => cart.markets.length
