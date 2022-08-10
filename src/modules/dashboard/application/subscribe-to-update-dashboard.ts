import {
  computed,
  ref,
  unref,
  watch,
} from 'vue'
import {useSportsMenuApiAdapter, useSportsMenuStoreAdapter} from '@/modules/sports-menu/services'

/**
 * Подписываемся на обновление меню спортов.
 */
export const useSubscribeToUpdateDashboard = () => {
  const api = useDashboardApiAdapter()
  const store = useDashboardStoreAdapter()

  const trigger = computed(() => toDashboardFiltersKey(filters))

  watch(() => toDashboardFiltersKey(filters), async () => {
    const updatedDashboardChamps = await api.loadDashboard(filters)

    dashboard.champs = updatedDashboardChamps
  }, {immediate: true})
}
