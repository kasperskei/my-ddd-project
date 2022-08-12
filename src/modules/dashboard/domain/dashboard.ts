/* eslint-disable curly */
import {MarketGroupId, MarketTypeId} from '@/shared/domain'
import type {GameId, MarketParam} from '@/shared/domain'
import type {
  Champ,
  Dashboard,
  DashboardGroupParam,
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

const handicapParam = (param: MarketParam): DashboardGroupParam => (param > 0 ? `+${param}-` : `-${Math.abs(param)}+`)
export const buildDashboardGroupParam = (
  typeId: MarketTypeId,
  param: MarketParam = 0,
): DashboardGroupParam => {
  if (param === 0) return '0'
  if (typeId === MarketTypeId.HANDICAP_FIRST) return handicapParam(param)
  if (typeId === MarketTypeId.HANDICAP_SECOND) return handicapParam(-param)
  return `${param}`
}

// export const marketTitleMap: Record<number, string> = {
//   [MarketTypeId.WIN_FIRST]: 'betting_market_type_1_name',
//   [MarketTypeId.DRAW]: 'betting_dashboard_draw',
//   [MarketTypeId.WIN_SECOND]: 'betting_market_type_3_name',
//   [MarketTypeId.WIN_MAIN_TIME_FIRST]: 'betting_market_type_3653_short_name',
//   [MarketTypeId.WIN_MAIN_TIME_SECOND]: 'betting_market_type_3655_short_name',
// };

// export const getDefaultMarketParam = (title: string, param: number) => [String(param), title]
//   .filter(Boolean)
//   .join(' ');

// export const getHandicapMarketParam = (title: string, param: number) => {
//   const stringParam = param > 0 ? `+${param}` : param;

//   return `${title} (${stringParam})`;
// };

// export const getDrawingMarketTitle = ({
//   title = '',
//   param,
//   typeId,
//   groupTitle,
//   groupId,
//   T,
// }: {
//   title?: string
//   param?: number
//   typeId: number
//   groupTitle?: string
//   groupId: number
//   T: (key: string) => string
// }): string => {
//   const marketTitleFromMap = marketTitleMap[typeId];

//   if (param !== undefined && !marketTitleFromMap) {
//       const titleGenerator = groupId === MarketGroupId.HANDICAP_GROUP_ID ? getHandicapMarketParam : getDefaultMarketParam;

//       return `${groupTitle} - ${titleGenerator(title, param)}`;
//   }
//   if (groupId === MarketGroupId.BOTH_WILL_SCORE_GROUP_ID) {
//       return `${groupTitle} - ${title}`;
//   }

//   return marketTitleFromMap ? T(marketTitleFromMap) : title;
// };
