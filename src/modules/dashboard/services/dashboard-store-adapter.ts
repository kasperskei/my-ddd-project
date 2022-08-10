import {reactive, ref} from 'vue'
import type {
  ChampsBySportId,
  DashboardSettings,
  GamesByChampId,
  MarketsByGameId,
  MarketsByGameMarketTypeId,
  SchemaBySportId,
  SubGamesByGameId,
} from '@/modules/dashboard/domain'

export const useDashboardStoreAdapter = () => {
  const settings = ref<DashboardSettings>({
    champIds: [],
    gameIds: [],
    sectionSportIds: [],
    topGameIds: [],
  })

  const schemaBySportId = ref<SchemaBySportId>(new Map())
  const champsBySportId = ref<ChampsBySportId>(new Map())
  const gamesByChampId = ref<GamesByChampId>(new Map())
  const subGamesByGameId = ref<SubGamesByGameId>(new Map())
  const marketsByGameId = ref<MarketsByGameId>(new Map())
  const marketsByGameMarketTypeId = ref<MarketsByGameMarketTypeId>(new Map())

  return reactive({
    settings,
    schemaBySportId,
    champsBySportId,
    gamesByChampId,
    subGamesByGameId,
    marketsByGameId,
    marketsByGameMarketTypeId,
  })
}
