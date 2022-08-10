import {
  computed,
  ref,
  unref,
  watch,
} from 'vue'
import type {
  ChampId,
  GameId,
  GameShortId,
  SectionId,
  SectionSportId,
  SportId,
} from '@/shared/domain'
import {useDashboardApiAdapter, useDashboardStoreAdapter} from '@/modules/dashboard/services'
import {
  Game,
  toDashboardFiltersKey,
  toggleGameInSettings,
  togglePinGameInSettings,
} from '@/modules/dashboard/domain'

/**
 * Установка настроек дашборда.
 */
export const useChangeDashboardSettings = () => {
  const store = useDashboardStoreAdapter()

  const toggleSubGames = (gameId: GameId): void => {
    toggleGameInSettings(store.settings, gameId)
  }

  const togglePinGame = (gameId: GameId): void => {
    togglePinGameInSettings(store.settings, gameId)
  }

  return {
    toggleSubGames,
    togglePinGame,
  }
}
