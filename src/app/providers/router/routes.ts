import {HomeDesktop} from '@/pages/home'

/** @todo Можно указать массив поддерживаемых языков в роутере */
export const PATH_WITH_LANG = '/:lng([a-z]{2})?'

export const routes = [
  {
    children: [
      {
        component: HomeDesktop,
        path: '/',
      },
    ],
    path: PATH_WITH_LANG,
  },
]
