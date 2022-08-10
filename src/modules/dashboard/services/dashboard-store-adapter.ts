import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'
import type {Champ, DashboardSettings} from '@/modules/dashboard/domain'

export const useDashboardStoreAdapter = defineStore('dashboard', () => {
  const settings = ref<DashboardSettings>({
    champIds: [],
    gameIds: [],
    sectionSportIds: [],
    pinnedGameIds: [],
  })
  const champs = ref<Champ[]>([])

  return reactive({
    settings,
    champs,
  })
})
