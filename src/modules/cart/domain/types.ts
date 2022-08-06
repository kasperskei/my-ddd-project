import type {SuperMarket} from '@/shared/types/market'

export const enum CartType {
  SINGLE = 0,
  EXPRESS = 1,
  SYSTEM = 2,
}

export type CartMarket = Pick<SuperMarket,
| 'champId'
| 'champName'
| 'coef'
| 'gameAwayTeamName'
| 'gameHomeTeamName'
| 'gameId'
| 'gameName'
| 'gameShortId'
| 'groupId'
| 'groupName'
| 'id'
| 'isBlocked'
| 'kind'
| 'name'
| 'param'
| 'playerId'
| 'playerName'
| 'sportId'
| 'sportName'
| 'typeId'
> & {
  /** Маркет зависим от других событий в корзине. */
  isDependent: boolean
}

export interface BaseCart {
  amount: UFloat
  coef: UFloat
  markets: CartMarket[]
  systemValue: UInt | undefined
  typeId: CartType
  /** Строковой код промо акции. */
  // promoCode: string | undefined
}

export type EmptyCart = BaseCart & {
  markets: []
  systemValue: undefined
  typeId: CartType.SINGLE
}

export type SingleCart = BaseCart & {
  markets: [CartMarket]
  systemValue: undefined
  typeId: CartType.SINGLE
}

export type ExpressCart = BaseCart & {
  markets: [CartMarket, CartMarket, ...CartMarket[]]
  systemValue: undefined
  typeId: CartType.EXPRESS
}

export type SystemCart = BaseCart & {
  markets: [CartMarket, CartMarket, CartMarket, ...CartMarket[]]
  systemValue: UInt
  typeId: CartType.SYSTEM
}

export type ComposeCart = EmptyCart | ExpressCart | SingleCart | SystemCart
