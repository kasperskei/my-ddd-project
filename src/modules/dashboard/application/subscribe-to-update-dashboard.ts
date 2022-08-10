import {
  computed,
  ref,
  unref,
  watch,
} from 'vue'
import {useDashboardApiAdapter, useDashboardStoreAdapter} from '@/modules/dashboard/services'
import {toDashboardFiltersKey} from '@/modules/dashboard/domain'

/**
 * Подписываемся на обновление меню спортов.
 */
export const useSubscribeToUpdateDashboard = () => {
  const api = useDashboardApiAdapter()
  const store = useDashboardStoreAdapter()

  const trigger = computed(() => toDashboardFiltersKey(store.settings))
  watch(trigger, async (settings) => {
    const updatedDashboardChamps = await api.loadDashboard(store.settings)

    store.champs = updatedDashboardChamps
  }, {immediate: true})
}
