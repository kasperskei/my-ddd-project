import type {Champ, DashboardSettings} from '@/modules/dashboard/domain'
import {Game, buildDashboardGroupParam} from '@/modules/dashboard/domain'
import {MarketGroupId, MarketTypeId} from '@/shared/domain'
import {delay} from '@/shared/lib/flow/delay'
import {random} from '@/shared/lib/number/random'

const responseMock: Champ[] = [
  {
    id: 1,
    name: 'Лига Чемпионов УЕФА',
    sportId: 1,
    logotype: 'icon.png',
    countryId: 1,
    // gamesCount: 1,
    // gamesCountWithVideo: 1,
    // gamesCountWithZone: 1,
    games: [
      {
        id: 1,
        shortId: 1,
        homeTeamName: 'Жальгирис',
        awayTeamName: 'Будё-Глимт',
        startedAt: new Date(),
        markets: [
          {
            typeId: MarketTypeId.WIN_FIRST,
            groupId: MarketGroupId.VICTORY,
            param: undefined,
            coef: 3.1,
            isBlocked: false,
            playerId: undefined,
            groupParam: buildDashboardGroupParam(MarketTypeId.WIN_FIRST),
          },
          {
            typeId: MarketTypeId.DRAW,
            groupId: MarketGroupId.VICTORY,
            param: undefined,
            coef: 1.2,
            isBlocked: false,
            playerId: undefined,
            groupParam: buildDashboardGroupParam(MarketTypeId.DRAW),
          },
          {
            typeId: MarketTypeId.WIN_SECOND,
            groupId: MarketGroupId.VICTORY,
            param: undefined,
            coef: 4.6,
            isBlocked: false,
            playerId: undefined,
            groupParam: buildDashboardGroupParam(MarketTypeId.WIN_SECOND),
          },
          {
            typeId: MarketTypeId.HANDICAP_FIRST,
            groupId: MarketGroupId.HANDICAP,
            param: -1,
            coef: 2.9,
            isBlocked: false,
            playerId: undefined,
            groupParam: buildDashboardGroupParam(MarketTypeId.HANDICAP_FIRST, -1),
          },
          {
            typeId: MarketTypeId.HANDICAP_SECOND,
            groupId: MarketGroupId.HANDICAP,
            param: +1,
            coef: 1.6,
            isBlocked: false,
            playerId: undefined,
            groupParam: buildDashboardGroupParam(MarketTypeId.HANDICAP_SECOND, +1),
          },
          {
            typeId: MarketTypeId.HANDICAP_FIRST,
            groupId: MarketGroupId.HANDICAP,
            param: -2,
            coef: 2.1,
            isBlocked: false,
            playerId: undefined,
            groupParam: buildDashboardGroupParam(MarketTypeId.HANDICAP_FIRST, -2),
          },
          {
            typeId: MarketTypeId.HANDICAP_SECOND,
            groupId: MarketGroupId.HANDICAP,
            param: +2,
            coef: 1.8,
            isBlocked: false,
            playerId: undefined,
            groupParam: buildDashboardGroupParam(MarketTypeId.HANDICAP_SECOND, +2),
          },
        ],
        subGames: [],
      },
    ],
  },
]

export const useDashboardApiAdapter = () => {
  const defaultSettings: DashboardSettings = {} as DashboardSettings

  const loadDashboard = async (settings = defaultSettings): Promise<Champ[]> => {
    await delay(random(100, 1000))

    return structuredClone(responseMock)
  }

  return {
    loadDashboard,
  }
}
