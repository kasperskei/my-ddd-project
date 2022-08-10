/* eslint-disable no-param-reassign */
import type {
  ChampId,
  GameId,
  GameShortId,
  SectionId,
  SectionSportId,
  SportId,
} from '@/shared/domain'
import type {DashboardSettings} from '@/modules/dashboard/domain/types'

export const toDashboardFiltersKey = (settings: DashboardSettings): string => [
  settings.sectionSportIds,
  settings.champIds,
  settings.gameIds,
].flat().join('-')

const selectFilter = <K extends keyof DashboardSettings>(settingKey: K) => (
  settings: DashboardSettings,
  settingId: DashboardSettings[K][number],
): DashboardSettings => {
  settings[settingKey] = [settingId] as DashboardSettings[K]

  return settings
}

export const selectSport = selectFilter('sectionSportIds')
export const selectChamp = selectFilter('champIds')
export const selectGame = selectFilter('gameIds')
/** @todo Поправить. */
export const selectTopGame = selectFilter('gameIds')
