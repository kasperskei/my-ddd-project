import type {
  ChampId,
  CountryId,
  GameId,
  GameShortId,
  MarketGroupId,
  MarketTypeId,
  PlayerId,
  SectionId,
  SectionSportId,
  SportId,
  SuperMarket,
} from '@/shared/domain'
import type {DictionaryKey} from '@/shared/services/i18n'

export type GameMarketTypeId = `${GameId}-${MarketTypeId}`

export interface Dashboard {
  champs: Champ[]
  settings: DashboardSettings
}

/** @todo Заменить Array на Set. */
export interface DashboardSettings {
  /** Чемпионаты, для которых грузятся игры. */
  champIds: ChampId[]
  /** Игры для которых показываются под игры. */
  gameIds: GameId[]
  /** Виды спорта в секциях, для которых грузятся чемпионаты и игры. */
  sectionSportIds: SectionSportId[]
  /** Id игр в топе. */
  pinnedGameIds: GameId[]
  /** Порядок групп маркетов в дашборде для спорта. */
}

interface DashboardSchemaType {
  name: DictionaryKey
  typeId: MarketTypeId
}
interface DashboardSchemaParam {
  name: DictionaryKey
}
interface DashboardSchemaGroupWithoutParam {
  groupId: MarketGroupId.DOUBLE_CHANCE | MarketGroupId.VICTORY
  types: [
    DashboardSchemaType,
    DashboardSchemaType,
    DashboardSchemaType,
  ]
}
interface DashboardSchemaGroupWithParam {
  groupId: MarketGroupId.HANDICAP | MarketGroupId.INDIVIDUAL_TOTAL_1 | MarketGroupId.INDIVIDUAL_TOTAL_2 | MarketGroupId.TOTAL
  types: [
    DashboardSchemaType,
    DashboardSchemaParam,
    DashboardSchemaType,
  ]
}
export interface DashboardSchema {
  groups: (DashboardSchemaGroupWithoutParam | DashboardSchemaGroupWithParam)[]
}

export interface Champ {
  logotype: FileNameWithExtension
  id: ChampId
  name: string
  sportId: SportId
  /** Время начала чемпионата. */
  // startedAt: Date
  countryId: CountryId
  /** @todo Нужно ли? */
  // countryName: string
  // gamesCount: UInt
  // gamesCountWithVideo: UInt
  // gamesCountWithZone: UInt
  // sectionIds: SectionId[]
  // isAlternative: boolean
  // isLong: boolean
  games: Game[]
}

interface BaseGame {
  awayTeamName: string | undefined
  homeTeamName: string
  id: GameId
  // sportId: SportId
  // champId: ChampId
  // name: string | undefined
  shortId: GameShortId
  startedAt: Date
  subGames: SubGame[]
  marketGroups: MarketsGroup[]
}

export type MatchGame = BaseGame & {
  awayTeamName: string
  // name: undefined
}

/** Долгосрочные игры. Содержат в себе ставки на результаты чемпионата. */
export type LongGame = BaseGame & {
  awayTeamName: undefined
  // name: undefined
}

export interface SubGame {
  id: GameId
  mainGameId: GameId
  name: string
  marketGroups: MarketsGroup[]
}

export type Game = LongGame | MatchGame

export interface MarketsGroup {
  groupId: MarketGroupId
  markets: Market[]
}

export interface Market {
  coef: number
  groupId: MarketGroupId
  isBlocked: boolean
  param: number
  playerId: PlayerId | undefined
  typeId: MarketTypeId
}

/** Оставил на будущее для оптимизации повторного рендеринга. */
// export type SchemaBySportId = Map<SportId, DashboardSchema>
// export type ChampsBySportId = Map<SportId, Champ[]>
// export type GamesByChampId = Map<ChampId, Game[]>
// export type SubGamesByGameId = Map<ChampId, Game[]>
// export type MarketsByGameId = Map<GameId, Market[]>
// export type MarketsByGameMarketTypeId = Map<GameMarketTypeId, Market[]>
