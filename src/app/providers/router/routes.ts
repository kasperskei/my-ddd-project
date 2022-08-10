import {h} from 'vue'
import type {RouteRecordRaw} from 'vue-router'

import {HomeDesktop} from '@/pages/home'

const BettingLayout = h('div')
const BettingExpressDay = h('div')
const BettingSlider = h('div')
const BettingCart = h('div')
const BettingSportsMenu = h('div')
const BettingDashboard = h('div')

const status = ':gameStatus(live|line)' as const
const section = ':menuSection' as const
// const section = ':menuSection(long)' as const
const sport = ':sportId' as const
const champ = ':champId' as const
const game = ':gameId' as const

const homePath = `${status}/${section}?/${sport}?/${champ}?` as const
/** @todo Действительно ли необходима такая ссылка или достаточно указать идентификатор игры? */
const gamePath = `${status}/${section}?/${sport}/${champ}/${game}` as const

/** @todo Можно указать массив поддерживаемых языков в роутере. */
const PATH_WITH_LANG = '/:lng([a-z]{2})?'
/** Все пути с языком не объявленные в роутере. */
const ALL_PATH_WITH_LANG = '/:lng([a-z]{2})?*'

// export const gameRoutePropsHandler = ({params: {game, section, pageType}}: {params: {game: string; section: string; pageType?: BettingPageType}}) => ({
//   gameId: Number.parseInt(game, 10),
//   gameType: section,
//   pageType: pageType || BettingPageType.HOME,
// })

/**
 * @todo Добавить редирект если в роутере не найден язык.
 */
export const routes: RouteRecordRaw[] = [
  {
    children: [
      {
        component: HomeDesktop,
        path: '',
      },
      {
        component: BettingLayout,
        children: [
          {
            components: {
              blockEnd: BettingExpressDay,
              blockStart: BettingSlider,
              inlineEnd: BettingCart,
              inlineStart: BettingSportsMenu,
              default: BettingDashboard,
            },
            name: 'home',
            path: homePath,
            props: {
              default: (to) => {
                const {
                  gameStatus,
                  menuSection,
                  sportId,
                  champId,
                } = to.params

                return {
                  gameStatus,
                  menuSection,
                  sportId,
                  champId,
                }
              },
            },
          },
          {
            components: {
              blockEnd: BettingExpressDay,
              blockStart: BettingSlider,
              inlineEnd: BettingCart,
              inlineStart: BettingSportsMenu,
              default: BettingDashboard,
            },
            name: 'game',
            path: gamePath,
          },
        ],
        path: '',
      },
    ],
    path: PATH_WITH_LANG,
  },
]
