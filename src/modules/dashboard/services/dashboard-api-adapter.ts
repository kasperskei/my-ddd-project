import type {
  Champ,
  DashboardSettings,
  Game,
} from '@/modules/dashboard/domain'
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
        marketGroups: [
          {
            groupId: 1,
            markets: [
              {
                typeId: 1,
                groupId: 1,
                param: 0,
                coef: 3.1,
                isBlocked: false,
                playerId: undefined,
              },
              {
                typeId: 2,
                groupId: 1,
                param: 0,
                coef: 1.2,
                isBlocked: false,
                playerId: undefined,
              },
              {
                typeId: 3,
                groupId: 1,
                param: 0,
                coef: 4.6,
                isBlocked: false,
                playerId: undefined,
              },
            ],
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
