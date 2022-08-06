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
export const useSubscribeToUpdateSportsMenu = () => {
  const api = useSportsMenuApiAdapter()
  const store = useSportsMenuStoreAdapter()

  const trigger = computed(() => [
    unref(store.sportsMenu.activeSportIds),
    unref(store.sportsMenu.activeChampIds),
  ].flat().join('-'))

  watch(trigger, async () => {
    const updatedSportsMenuSections = await api.loadSportsMenuSections()

    store.sportsMenu.sections = updatedSportsMenuSections
  }, {immediate: true})
}
