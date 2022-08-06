type SectionId = UInt
type SportId = UInt
type ChampId = UInt
type GameId = UInt
type GameShortId = UInt

export interface SportsMenu {
  activeChampIds: ChampId[]
  activeSportIds: SportId[]
  sections: Section[]
}

/** Секция спортивного меню. */
export interface Section {
  id: SectionId
  name: string
  sports: Sport[]
}

export interface Sport {
  champs: Champ[]
  champsCount: UInt
  gamesCount: UInt
  id: SportId
  name: string
}

export interface Champ {
  games: ComposeGame[]
  gamesCount: UInt
  icon: FileNameWithExtension
  id: ChampId
  name: string
}

interface BaseGame {
  awayTeamName: string | undefined
  homeTeamName: string
  id: GameId
  // name: string | undefined
  shortId: GameShortId
  startedAt: Date
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

export type ComposeGame = LongGame | MatchGame
