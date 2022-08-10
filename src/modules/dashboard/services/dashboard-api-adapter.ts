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
    sectionId: 1,
    games: [
      {
        id: 1,
        homeTeamName: 'Жальгирис',
        awayTeamName: 'Будё-Глимт',
        startedAt: new Date(),
        marketGroups: [
          {
            id: 1,
            markets: [
              {
                typeId: 1,
                groupId: 1,
                param: 0,
                coef: 3.1,
              },
              {
                typeId: 2,
                groupId: 1,
                param: 0,
                coef: 1.2,
              },
              {
                typeId: 3,
                groupId: 1,
                param: 0,
                coef: 4.6,
              },
            ],
          },
        ],
      },
    ],
  },
]

export const useDashboardApiAdapter = () => {
  const filters: DashboardSettings = {} as DashboardSettings

  const loadDashboard = async (f = filters): Promise<Champ[]> => {
    await delay(random(100, 1000))

    const champs: Champ[] = [
      {
        id: 1,
        name: 'Лига Чемпионов УЕФА',
        sportId: 1,
        logotype: 'icon.png',
        startedAt: new Date(),
        countryId: 1,
        countryName: 'CCCP',
        gamesCount: 123,
        gamesCountWithVideo: 12,
        gamesCountWithZone: 23,
      },
    ]
    const games: Game[] = [
      {
        awayTeamName: 'Жальгирис',
        homeTeamName: 'Будё-Глимт',
        id: 1,
        shortId: 1,
        startedAt: new Date(),
      },
    ]

    return structuredClone(responseMock)
  }

  return {
    loadDashboard,
  }
}
