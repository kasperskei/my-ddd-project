import type {Section} from '@/modules/sports-menu/domain'
import {delay} from '@/shared/lib/flow/delay'

const responseMock: Section[] = [
  {
    id: 1,
    name: 'Топ',
    sports: [
      {
        id: 1,
        name: 'Футбол',
        champsCount: 123,
        gamesCount: 2023,
        champs: [
          {
            id: 1,
            name: 'UEFA Супер кубок',
            icon: 'icon.svg',
            gamesCount: 41,
            games: [
              {
                id: 1,
                shortId: 1,
                homeTeamName: 'Реал Мадрид',
                awayTeamName: 'Айнтрахт Франкфурт',
                startedAt: new Date(2022, 7, 10, 22),
              },
            ],
          },
        ],
      },
    ],
  },
]

export const useSportsMenuApiAdapter = () => {
  const appConfig = {
    language: 'ru',
  }

  const loadSportsMenuSections = async ({
    language = appConfig.language,
    sportIds = [],
    champIds = [],
  } = {}): Promise<Section[]> => {
    await delay(1000)

    return structuredClone(responseMock)
  }

  return {
    loadSportsMenuSections,
  }
}
