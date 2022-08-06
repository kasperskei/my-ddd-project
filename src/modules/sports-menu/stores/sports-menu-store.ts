import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {SportsMenu} from '@/modules/sports-menu/domain'

export const useSportsMenuStore = defineStore('sport-menu', () => {
  const sportsMenu = ref<SportsMenu>({
    activeChampIds: [],
    activeSportIds: [],
    sections: [],
  })

  return {
    sportsMenu,
  }
})
