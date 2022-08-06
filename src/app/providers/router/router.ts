import type {Router} from 'vue-router'
import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from 'vue-router'

import {routes} from '@/app/providers/router/routes'

export const withRouter = (): Router => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return {left: 0, top: 0}
    },
  })

  return router
}
