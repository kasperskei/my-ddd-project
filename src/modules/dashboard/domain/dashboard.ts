/* eslint-disable no-param-reassign */
import type {
  ChampId,
  GameId,
  GameShortId,
  SectionId,
  SectionSportId,
  SportId,
} from '@/shared/domain'
import type {
  Champ,
  Dashboard,
  DashboardSettings,
  Game,
} from '@/modules/dashboard/domain/types'
import {toggleArrayItem} from '@/shared/lib/array/toggle'

export const toDashboardFiltersKey = (settings: DashboardSettings): string => [
  settings.sectionSportIds,
  settings.champIds,
  settings.gameIds,
  settings.pinnedGameIds,
].flat().join('-')

/** Есть ли приколотые игры. */
export const hasPinnedGame = (settings: DashboardSettings): boolean => settings.pinnedGameIds.length > 0

export const containsGameInSettings = (settings: DashboardSettings, gameId: GameId): boolean => settings.gameIds.includes(gameId)
export const toggleGameInSettings = (settings: DashboardSettings, gameId: GameId): DashboardSettings => {
  toggleArrayItem(settings.gameIds, gameId)
  return settings
}

export const containsPinGameInSettings = (settings: DashboardSettings, gameId: GameId): boolean => settings.pinnedGameIds.includes(gameId)
export const togglePinGameInSettings = (settings: DashboardSettings, gameId: GameId): DashboardSettings => {
  toggleArrayItem(settings.pinnedGameIds, gameId)
  return settings
}

/** Добавляет чемпионат в массив, если у него есть игры. */
const addChampWithGames = (champs: Champ[], champ: Champ, games: Game[]): Champ[] => {
  if (games.length > 0) {
    champs.push({...champ, games})
  }
  return champs
}
export const getPinnedChampsWithGames = ({champs, settings: {pinnedGameIds}}: Dashboard): Champ[] => {
  const pinnedChamps = champs.reduce<Champ[]>((acc, champ) => {
    const pinnedGames = champ.games.filter((game) => pinnedGameIds.includes(game.id))
    return addChampWithGames(acc, champ, pinnedGames)
  }, [])
  return pinnedChamps
}
export const getOtherChampsWithGames = ({champs, settings: {pinnedGameIds}}: Dashboard): Champ[] => {
  const otherChamps = champs.reduce<Champ[]>((acc, champ) => {
    const otherGames = champ.games.filter((game) => !pinnedGameIds.includes(game.id))
    return addChampWithGames(acc, champ, otherGames)
  }, [])
  return otherChamps
}
