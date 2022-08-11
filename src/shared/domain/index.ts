import type {SportId} from '@/shared/domain/sport'
import type {MarketTypeId} from '@/shared/domain/market-type'

export * from '@/shared/domain/sport'
export * from '@/shared/domain/market-group'
export * from '@/shared/domain/market-type'

export type ChampId = UInt
export type CountryId = UInt
export type GameId = UInt
export type GameShortId = UInt
export type MarketId = `${GameId}-${MarketTypeId}-${MarketParam | 0}-${PlayerId | 0}`
export type MarketParam = number
export type TeamId = UInt
export type PlayerId = TeamId | UInt
export type SectionId = UInt
export type SectionSportId = `${SectionId}-${SportId}`

export interface SuperMarket {
  champId: number
  champName: string
  champNameEng: string
  coef: UFloat
  gameAwayTeamName: string
  gameAwayTeamNameEng: string
  gameHomeTeamName: string
  gameHomeTeamNameEng: string
  gameId: GameId
  gameName: string | undefined
  gameNameEng: string | undefined
  gameShortId: number
  groupId: number
  groupName: string | undefined
  id: MarketId
  isBlocked: boolean
  kind: number
  name: string
  /** @todo Возможно, вместо undefined лучше использовать 0. */
  param: number | undefined
  /** @todo Возможно, вместо undefined лучше использовать 0. */
  playerId: number | undefined
  playerName: string | undefined
  sportId: number
  sportName: string
  sportNameEng: string
  typeId: number
}

export const fromSectionSportId = (sectionSportId: SectionSportId): [sectionId: SectionId, sportId: SportId] => sectionSportId.split('-').map(Number) as [number, number]
export const toSectionSportId = (sectionId: SectionId, sportId: SportId): SectionSportId => `${sectionId}-${sportId}`

export const fromMarketId = (marketId: MarketId): [GameId, MarketTypeId, MarketParam | 0, PlayerId | 0] => marketId.split('-').map(Number) as [number, number, number, number]
export const toMarketId = (gameId: GameId, typeId: MarketTypeId, param: MarketParam = 0, playerId: PlayerId = 0): MarketId => `${gameId}-${typeId}-${param}-${playerId}`
