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

export type GameMarketTypeId = `${GameId}-${MarketTypeId}`

export interface Dashboard {
  champs: Champ[]
  games: Game[]
  settings: DashboardSettings
}

export interface DashboardSettings {
  /** Чемпионаты, для которых грузятся игры. */
  champIds: ChampId[]
  /** Игры для которых грузятся под игры. */
  gameIds: GameId[]
  /** Виды спорта в секциях, для которых грузятся чемпионаты и игры. */
  sectionSportIds: SectionSportId[]
  /** Id игр в топе. */
  topGameIds: GameId[]
}

export interface DashboardSchema {
  groups: {
    id: MarketGroupId
    types: {
      id: MarketTypeId
      name: string
    }[]
  }[]
}

export interface Champ {
  // games: Game[]
  logotype: FileNameWithExtension
  id: ChampId
  name: string
  sportId: SportId
  /** Время начала чемпионата. */
  startedAt: Date
  countryId: CountryId
  countryName: string
  gamesCount: UInt
  gamesCountWithVideo: UInt
  gamesCountWithZone: UInt
  /** @todo Нужно ли? */
  // sectionIds: SectionId[]
  // isAlternative: boolean
  // isLong: boolean
}

interface BaseGame {
  awayTeamName: string | undefined
  homeTeamName: string
  id: GameId
  // name: string | undefined
  shortId: GameShortId
  startedAt: Date

  subGames: SubGame[]
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
  sportId: SportId
}

export type Game = LongGame | MatchGame

export type Market = SuperMarket

export interface Team {
  id: number
  gameId: GameId
  countryId: CountryId
  type?: number
  name: string
  logotypes: FileNameWithExtension[]
  logo: FileNameWithExtension | undefined
  playerIds: PlayerId[]
}

/** Оставил на будущее для оптимизации повторного рендеринга. */
export type SchemaBySportId = Map<SportId, DashboardSchema>
export type ChampsBySportId = Map<SportId, Champ[]>
export type GamesByChampId = Map<ChampId, Game[]>
export type SubGamesByGameId = Map<ChampId, Game[]>
export type MarketsByGameId = Map<GameId, Market[]>
export type MarketsByGameMarketTypeId = Map<GameMarketTypeId, Market[]>
