import {ref} from 'vue'
import type {Champ} from '@/modules/dashboard/domain'

export const useDashboardStore = () => {
  const champs = ref<Champ[]>([])

  return {
    champs: [],
  }
}
