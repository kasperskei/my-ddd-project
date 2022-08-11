import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'
import type {
  Champ,
  DashboardSchema,
  DashboardSettings,
} from '@/modules/dashboard/domain'
import type {SportId} from '@/shared/domain'

export const useDashboardStoreAdapter = defineStore('dashboard', () => {
  const settings = ref<DashboardSettings>({
    champIds: [],
    gameIds: [],
    sectionSportIds: [],
    pinnedGameIds: [],
  })
  const champs = ref<Champ[]>([])
  const schemaBySportId = ref(new Map<SportId, DashboardSchema>())

  return reactive({
    settings,
    champs,
    schemaBySportId,
  })
})
